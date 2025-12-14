# 🔴 Version 3: The Foolproof System (Robustness) - Detailed Plan

**Goal:** Ensure the application CANNOT crash, hang, or leave the user in a broken state, regardless of external factors.
**Status:** Protection Layer
**Complexity:** Medium (State Logic & Error Handling)

---

## 1. Core Philosophy

"Graceful Degradation." If the advanced features fail, the system falls back to the core features silently and instantly. The user should never see a stack trace or a spinning wheel that never ends.

## 2. The Resilient Pipeline Pattern

We implement a documented pipeline where data flows through "Safe Zones".

### A. The Circuit Breaker (`js/utils/circuit_breaker.js`)

Prevents the app from repeatedly calling a dead API.

* **State**: `CLOSED` (Normal), `OPEN` (Error Block), `HALF-OPEN` (Testing).
* **Thresholds**:
  * **Failure Count**: 3 Errors (Total) within 60 seconds.
  * **Timeout**: If API takes > 5000ms, raw text is returned immediately.
  * **Reset Timeout**: 30 seconds wait before trying again.

### B. The Sanitizer (`js/utils/sanitizer.js`)

Prevents "Prompt Injection" or Malicious AI Output.

* **Logic**:
  * Strip `<script>`, `<iframe>`, `<object>` tags.
  * Allow only safe tags: `<b>`, `<i>`, `<span>`, `<p>`, `<br>`.
* **Why?**: AI can hallucinate HTML. We must ensure it doesn't break our DOM.

---

## 3. Error Scenarios & Recovery Maps

### Scenario 1: The "Demo Effect" (Internet Dies during Presentation)

1. **Event**: `fetch()` throws `NetworkError`.
2. **V3 Actions**:
    * Catch block intercepts error.
    * `CircuitBreaker` records failure (1/3).
    * **Fallback**: Call `RegexEngine.process(text)`.
    * **UI**: Show small/toast "⚠️ Offline" (Non-blocking).
    * **Result**: Text still transforms (e.g., changes font/bolding), so the demo looks successful.

### Scenario 2: The "Gibberish" (AI Hallucination)

1. **Event**: AI returns empty string or valid JSON with null values.
2. **V3 Actions**:
    * `Validator` checks `response.length > 0`.
    * If invalid, discard result.
    * **Result**: Show original text. It is better to show raw text than broken text.

---

## 4. Implementation Details: The `PipelineManager`

```javascript
// Pseudo-code for the master controller
async function processInput(text) {
    // 1. Sanitize Input
    const safeText = sanitize(text);

    // 2. Try Version 2 (AI)
    if (CircuitBreaker.isAvailable()) {
        try {
            const aiResult = await GeminiAdapter.transform(safeText);
            return aiResult;
        } catch (e) {
            CircuitBreaker.recordError();
            console.warn("Falling back to V1");
        }
    }

    // 3. Fallback to Version 1 (Core)
    return RegexEngine.transform(safeText);
}
```

## 5. Final Checklist for "Unbreakability"

* [ ] **Timeout Guard**: Any layout operation > 16ms is deferred (requestAnimationFrame).
* [ ] **Memory Guard**: Chat history capped at 100 messages to prevent browser lag.
* [ ] **API Guard**: UserApiKey is validated regex-wise (starts with `sk-`, length check) before sending.

---

## 6. 👥 Team Responsibilities for V3

* **Member 1 (Tech Lead)**:
  * Implement the `CircuitBreaker` class.
  * Final Code Review: Ensure no infinite loops or unhandled Promises.
* **Member 2 (Designer)**:
  * Design the "Offline/Error" states (e.g., a broken cloud icon).
  * Ensure the "Fallback" transition looks smooth, not jarring.
* **Member 3 (Builder A)**:
  * Write the `Sanitizer` function to strip malicious HTML (`<script>` tags).
  * Test the "Demo Effect" (Unplug internet, verify app doesn't crash).
* **Member 4 (Builder B)**:
  * Implement the "Input Guard" (limiting character count).
  * Write the "Reset/Clear" functionality to recover from a stuck state.
