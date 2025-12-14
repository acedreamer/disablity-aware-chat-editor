# 🏛️ The Master Plan: Disability-Aware Chat Editor (Ultimate Edition)

**Project Name:** Disability-Aware Chat Editor (Mini)
**Document Status:** Final "Blue-Print"
**Scope:** V1 (Core), V2 (AI Enhanced), V3 (Foolproof/Robust)

This document is the **single source of truth** for the entire project. It combines the ease of a "Mini" editor with the power of "Generative AI" and the stability of "Enterprise Architecture".

---

## 📑 Table of Contents

1. **Executive Summary & Research Basis**
2. **System Versions Overview** (The Phased Approach)
3. **Detailed Architecture (The "Hybrid Strategy")**
4. **Data Models & State** (The "Brain")
5. **Fail-Safe Protocols** (The "Shield")
6. **Full File Structure**

---

## 1. Executive Summary & Research Basis

This software transforms text to make it accessible for neurodivergent users (Dyslexia, ADHD, Autism). It is built on a **Local-First**, **Privacy-Centric** architecture with optional **Cloud AI** enhancements.

### 📚 IEEE & Research Backing

* **Dyslexia**: Lexical Simplification via AI (Ref: *"LexiEase AI"*, IEEE). Values: `OpenDyslexic` font, `1.5` line spacing.
* **Autism**: Social Cue Decoding (Ref: *"Utilizing Hybrid-Deep Learning for ASD..."*, IEEE 2024). Feature: Metaphor "Literalizer".
* **ADHD**: Cognitive Load Reduction. Feature: "Bionic Reading" (Bold first 3 letters) to anchor attention.

---

## 2. System Versions (The Layers)

We design the software in 3 "Layers" or "Versions". The final product includes ALL of them.

### 🟢 Version 1: The "Offline Core" (MVP)

* **Goal**: Works correctly without internet.
* **Tech**: Vanilla JS, Regex, LocalStorage.
* **Features**:
  * Dark/Light Mode.
  * Change Font (Dyslexic/Sans-Serif).
  * "Bionic Reading" (Rule-based bolding).
  * Local Autosave.

### 🔵 Version 2: The "AI Enhancer" (Smart Layer)

* **Goal**: Understands meaning and context.
* **Tech**: Google Gemini 1.5 Flash API.
* **Features**:
  * **Summarizer**: Scans long text and gives a 1-sentence TL;DR (ADHD).
  * **Tone Detector**: Tells the user if a message is "Angry", "Sarcastic", or "Happy" (Autism).
  * **Rewriter**: Simplifies complex vocabulary (Dyslexia).

### 🔴 Version 3: The "Foolproof System" (Robustness)

* **Goal**: Never crashes, handles errors gracefully.
* **Tech**: Circuit Breakers, State Managers, Error Boundaries.
* **Features**:
  * **Auto-Fallback**: If AI fails, Version 1 takes over instantly.
  * **Retry Logic**: Exponential backoff for bad connections.
  * **Sanitization**: Prevents HTML injection.

---

## 3. Detailed Architecture (The Hybrid Strategy)

We use a **Pipeline Architecture** with a **Circuit Breaker**.

```mermaid
graph TD
    User-->|Text Input| Debouncer[Debounce (800ms)]
    Debouncer --> Controller[Master Controller]
    
    Controller --> Check{Is Online?}
    
    %% The AI Path (Version 2)
    Check -- Yes --> AIWrapper[Circuit Breaker Wrapper]
    AIWrapper --> Gemini[Gemini 1.5 Flash API]
    Gemini -- Success --> Parser[JSON Parser]
    
    %% The Fallback Path (Version 1)
    Check -- No --> RegexEngine[Local Regex Engine]
    AIWrapper -- Error/Timeout --> RegexEngine
    
    %% Merging
    Parser --> UI[UI Renderer]
    RegexEngine --> UI
```

### 🧠 The Engines

1. **`RegexEngine.js`** (Reliable, Dumb):
    * Hardcoded rules like `/utilize/g -> "use"`.
    * Algorithmic HTML wrapping for Bionic Reading.
2. **`GeminiAdapter.js`** (Smart, Fragile):
    * Sends System Prompts: *"You are an expert in accessibility. Rewrite this text for a user with Dyslexia."*

---

## 4. Data Models (The "Model")

We define the strict shape of our data to prevent bugs.

### The `EditorState`

```javascript
{
    // Meta Data
    sessionId: "uuid-v4",
    lastSave: 1715420000,
    
    // User Configuration
    config: {
        mode: "adhd", // The active disability profile
        useAI: true,  // Master toggle for Cloud features
        apiKey: "sk-...", // Stored encrypted
    },
    
    // The Content
    content: {
        raw: "Original text...",   // Always preserved
        processed: "<b>Ori</b>ginal...", // What the user sees
        summary: "Short summary...",     // AI generated metadata
        tone: "Neutral"                  // AI generated metadata
    },
    
    // System Status (Version 3)
    status: {
        network: "online",
        circuitHandler: "closed", // 'open' means we stopped calling AI
        error: null
    }
}
```

---

## 5. Fail-Safe Protocols (The "Foolproof" Mechanisms)

These ensure the professor sees a working demo **no matter what**.

### Protocol A: The "Circuit Breaker"

* **Trigger**: 3 consecutive API errors (404, 500, or Timeout).
* **Action**:
    1. Set `status.circuitHandler = "open"`.
    2. Stop all AI calls for **30 seconds**.
    3. Route all text to `RegexEngine`.
    4. Show small "⚠️ Offline Mode" badge.

### Protocol B: The "Input Guard"

* **Trigger**: User parses 50,000 words.
* **Action**:
    1. Truncate input to 2,000 words for AI.
    2. Show warning: "Text too long for AI, processing first section only."
    3. Process remainder with Regex (which is infinite).

### Protocol C: The "Sanitizer"

* **Trigger**: AI returns `<script>alert('hack')</script>`.
* **Action**: Run purely textual content through a `stripHtml()` function before inserting into the DOM.

---

## 6. Full Implementation File Structure

```
/
├── index.html                  # The Entry Point
├── MASTER_ARCHITECTURE.md      # This Document
├── README.md                   # Quick Start
│
├── css/
│   ├── core.css                # Layout & Resets
│   ├── themes.css              # Variables (--bg-color)
│   └── accessibility.css       # Specifics (.font-dyslexic)
│
├── js/
│   ├── app.js                  # Main Bootstrapper
│   ├── state.js                # The State Manager
│   ├── utils/
│   │   ├── debouncer.js        # Performance Tool
│   │   └── sanitizer.js        # Security Tool
│   │
│   └── engines/
│       ├── orchestrator.js     # The "Controller"
│       ├── regex_engine.js     # Version 1 (Offline)
│       └── gemini_adapter.js   # Version 2 (Online)
```

---

## 📝 Final Verification Checklist

* [ ] **Architecture**: Does it support Offline? **Yes (V1)**.
* [ ] **Requirements**: Does it use AI? **Yes (V2)**.
* [ ] **Reliability**: Is it crash-proof? **Yes (V3)**.
* [ ] **Documentation**: Are designs backed by IEEE? **Yes**.
