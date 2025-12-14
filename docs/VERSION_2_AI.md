# 🔵 Version 2: The AI Enhancer (Smart Layer) - Detailed Plan

**Goal:** Leverage Large Language Models (LLMs) to provide context-aware text transformations that regex cannot achieve.
**Status:** Advanced Layer
**Complexity:** High (Async API, Prompt Engineering)
**Model:** Google Gemini 1.5 Flash (via API)

---

## 1. Core Philosophy
"Understand the user, not just the text." Version 2 adds semantic understanding. It doesn't just replace words; it rewrites sentences, detects tone, and summarizes context.

## 2. Technical Architecture for V2

### A. The Gemini Adapter (`js/engines/gemini_adapter.js`)
This module handles all communication with Google's Generative AI.

#### 1. Security & Orchestration
*   **Key Storage**: API Key stored in `localStorage` (encryped/obfuscated if possible, but for this mini demo, raw is acceptable with user consent).
*   **Model Config**:
    *   `temperature`: 0.3 (Low creativity, high precision).
    *   `maxTokens`: 200 (To prevent long rambling responses).

### B. System Prompts (The "Brains")

We will define specific "System Instructions" for each Mode.

#### Strategy 1: Dyslexia Mode (Rewriter)
> **System Prompt**: "You are an assistive technology for reading accessibility. Your task is to rewriting the user's text to be simpler and easier to read for someone with Dyslexia.
> 1. Replace complex vocabulary with simple everyday words (e.g. 'utilize' -> 'use').
> 2. Break long sentences into two shorter sentences.
> 3. Keep the original meaning exactly.
> 4. Do NOT add any preamble like 'Here is the rewritten text'. Just output the result."

#### Strategy 2: Autism Mode (Tone Decoder)
> **System Prompt**: "Analyze the following text for social cues. Identify the Tone (Sarcastic, Angry, Happy, Neutral) and if there are any Metaphors.
> Output JSON format: { 'tone': '...', 'metaphors': ['original' -> 'literal meaning'] }."

#### Strategy 3: ADHD Mode (Summarizer)
> **System Prompt**: "Summarize the following text into exactly ONE bullet point of maximum 15 words. Extract any 'Deadlines' or 'Action Items'."

---

## 3. Data Flow (Request/Response)

```json
// Request
{
  "contents": [{
    "parts": [{"text": "You are killing me with these jokes! break a leg at the show."}]
  }]
}

// Response (Autism Mode JSON)
{
  "tone": "Playful/Supportive",
  "metaphors": [
    {"phrase": "killing me", "meaning": "making me laugh hard"},
    {"phrase": "break a leg", "meaning": "good luck"}
  ]
}
```

---

## 4. UI Integration
*   **Tone Indicators**: Small badges `[Sarcasm]` injected next to messages.
*   **Summaries**: A light yellow box at the top of large text blocks with the TL;DR.

---

## 5. 👥 Team Responsibilities for V2

*   **Member 1 (Tech Lead)**:
    *   Write the `GeminiAdapter` class and handle the API Key security.
    *   Implement the Async/Await logic to ensure the UI doesn't freeze while waiting for AI.
*   **Member 2 (Designer)**:
    *   Design the "AI Processing" state (Spinners, Skeletons).
    *   Style the "Tone Badges" and "Summary Box" to look distinct but premium.
*   **Member 3 (Builder A)**:
    *   Write the "System Prompts" for Dyslexia and Autism modes. You are the "Prompt Engineer".
*   **Member 4 (Builder B)**:
    *   Write the "System Prompts" for ADHD mode (Summarization).
    *   Create the "Use AI" toggle in the UI settings.

