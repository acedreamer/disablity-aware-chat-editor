# Architecture Team: Work Allocation & Roles

This document assigns technical ownership of the **"Resilient Pipeline"** architecture to specific crew members.

**Team Members:** Abishek S, Karthik B, Alfred Jaison, Ashish S.

---

## 1. Abishek S — System Architect & Core State
**Role:** The "Controller". Responsible for the application's central nervous system.

*   **Primary Module**: `StateManager.js` & `PipelineController.js`.
*   **Specific Responsibilities**:
    *   Implement the **Unidirectional Data Flow** (ensuring data only moves one way).
    *   Build the `EditorState` object (handling `raw` vs `processed` text).
    *   Manage the **Debounce Timer** (preventing API calls on every keystroke).
    *   *Deliverable*: The central event loop that connects the UI to the Logic.

## 2. Karthik B — AI Integration Specialist
**Role:** The "Brain Surgeon". Responsible for the smart rewriting logic.

*   **Primary Module**: `GeminiAdapter.js`.
*   **Specific Responsibilities**:
    *   Implement the `SafeFetch` utility (handling timeouts).
    *   Design the **Prompts** for each mode (Dyslexia vs. ADHD vs. Autism).
    *   Parse the JSON output from the AI into HTML (injecting bold tags/spans).
    *   *Deliverable*: A module that takes a string and returns a "smart" rewritten HTML string.

## 3. Alfred Jaison — Rule Engine Engineer
**Role:** The "Safety Net". Responsible for the offline/fallback logic.

*   **Primary Module**: `RegexEngine.js`.
*   **Specific Responsibilities**:
    *   Build the library of **Synonym Replacements** (e.g., "utilize" -> "use").
    *   Implement "Bionic Reading" logic (bolding the first 3 letters of words) using pure JavaScript strings.
    *   Ensure this runs effectively when `config.aiEnabled` is false.
    *   *Deliverable*: A fast, synchronous function that cleans text without an API key.

## 4. Ashish S — Reliability & Security Engineer
**Role:** The "Bodyguard". Responsible for keeping the app from crashing.

*   **Primary Module**: `CircuitBreaker.js` & `Sanitizer.js`.
*   **Specific Responsibilities**:
    *   Implement the **Circuit Breaker** (detects 429 Errors and locks the API).
    *   Build the **Input Sanitizer** (strips dangerous `<script>` tags from pasted text).
    *   Conduct **Chaos Testing** (manually turning off WiFi to test recovery).
    *   *Deliverable*: The defense systems that wrap around the other modules.

---

## Technical Workflow Reference

1.  **Abishek** captures the keystroke.
2.  **Ashish** sanitizes it.
3.  **Abishek** sends it to the Pipeline.
4.  **Karthik** tries to process it with AI.
5.  *(If network fails)* **Ashish's** Circuit Breaker trips --> **Alfred's** Local Engine takes over.
6.  **Abishek** saves the result to State and updates the UI.
