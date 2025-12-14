# 🟢 Version 1: The Offline Core (MVP) - Detailed Plan

**Goal:** Create a fully functional, privacy-first accessibility editor that works 100% offline.
**Status:** Foundation Layer
**Complexity:** Low (Rule-Based)

---

## 1. Core Philosophy
"What happens on your device, stays on your device." Version 1 is the safety net. If the internet fails, or the AI service goes down, this version **MUST** continue to provide value.

## 2. Technical Architecture for V1

### A. The Regex Engine (`js/engines/regex_engine.js`)
This is a synchronous, JavaScript-based text processor. It uses clear, deterministic rules to transform text.

#### Strategy 1: Dyslexia Support (Lexical Simplification via Map)
We will use a hardcoded generic map of common complex words to simple synonyms.
*   **Data Structure**:
    ```javascript
    const SIMPLIFICATION_MAP = {
        "utilize": "use",
        "commence": "start",
        "facilitate": "help",
        "nevertheless": "however",
        // ... extendable list
    };
    ```
*   **Logic**: Regex global replace `new RegExp(key, 'gi')`. Note: This is "dumb" replacement (doesn't know context), but fast and reliable.

#### Strategy 2: Bionic Reading (Algorithmic)
*   **Algorithm**: "Bold the first half of the word."
*   **Implementation**:
    1.  Split text by spaces.
    2.  For each word:
        *   Calculate length `L`.
        *   Bold characters `0` to `Math.ceil(L/2)`.
    3.  Join back together.
*   **Constraint**: Must preserve existing HTML tags if any.

#### Strategy 3: Autism Support (Literalizer)
*   **Data Structure**: Dictionary of idioms.
    ```javascript
    const IDIOMS = {
        "break a leg": "good luck",
        "raining cats and dogs": "raining heavily",
        "piece of cake": "very easy"
    };
    ```

### B. State Management
*   **LocalStorage**: Autosave user input to `chat_editor_draft` every 2 seconds.
*   **Theme**: Toggle CSS classes on `<body>`: `.theme-dark`, `.font-dyslexic`.

---

## 3. Detailed File Requirements

### `index.html` (Base)
*   Must load `core.css` and `app.js`.
*   **No external CDNs** (except Fonts if cached, but best to stick to system fonts for true offline).

### `css/accessibility.css`
*   `.font-dyslexic`: Uses `OpenDyslexic` (woff2 local file) or `Verdana` fallback.
*   `.mode-high-contrast`: Yellow text on Black background.

---

## 4. 👥 Team Responsibilities for V1

*   **Member 1 (Tech Lead)**:
    *   Review `regex_engine.js` for logic errors.
    *   Ensure state management saves to LocalStorage correctly.
*   **Member 2 (Designer)**:
    *   Design the High-Contrast (Yellow/Black) and Dyslexic (Cream/Black) themes.
    *   Ensure the "Bionic Reading" bolding looks good and doesn't break layout.
*   **Member 3 (Builder A)**:
    *   Create the `SIMPLIFICATION_MAP` variable with at least 20 words for the "Dyslexia" substitution.
    *   Setup the file structure (`index.html`, `js/`, `css/`).
*   **Member 4 (Builder B)**:
    *   Write the `Bionic Reading` algorithm function.
    *   Wire up the Mode Switching buttons (Click -> Change Rules).

---

## 5. Testing V1
*   **Test**: Disconnect WiFi.
*   **Action**: Type "I will utilize this tool."
*   **Expected**: "I will **use** this tool." (In Dyslexia Mode).
