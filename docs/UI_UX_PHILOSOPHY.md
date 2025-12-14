# UI/UX Design Philosophy: Disability-Aware Chat Editor

> **Core Mission**: To create an interface that is not just "accessible" by compliance standards, but "cognitively ergonomic" for users with neurodiverse needs.

## 1. Visual Identity: "Calm Clarity"

The visual design aims to be consistent, predictable, and devoid of sensory overload, while maintaining a modern, premium aesthetic.

### A. The "Soft Modern" Aesthetic
*   **Concept**: Avoid sharp, aggressive corners and high-frequency visual noise.
*   **Implementation**:
    *   **Rounded Corners**: Large border-radius (12px-16px) on cards and buttons.
    *   **Depth without Clutter**: Use subtle drop shadows (neumorphism-lite) *only* to indicate interactability, ensuring flat elements don't get lost.
    *   **Glassmorphism**: Use a high-legibility "frosted glass" effect for overlays (e.g., tooltips, modals) to keep context visible but blurred, reducing object permanence anxiety.

### B. Color Strategy: "Stimulus Control"
We will use a **Semantic Color System** where color always equals meaning.
*   **Palette**:
    *   **Primary**: `Calm Teal` (#2A9D8F) or `Soft Slate` (#455A64) - soothing, not urgent.
    *   **Action**: `Clear Blue` (#2E86DE) - distinct, actionable.
    *   **Warning**: `Amber` (#FFA502) - noticeable but not alarming (avoid "Danger Red").
    *   **Background**: `Off-White` / `Warm Grey` (#F5F6FA) - reduces eye strain compared to pure white.
*   **Modes**:
    *   **High Contrast Neon**: For low vision (Yellow on Black).
    *   **Muted Pastel**: For autism sensory sensitivity (lower saturation).

## 2. Uniqueness Factors (The "USP")

How we stand out from generic accessibility tools:

### A. "Morphing UI" (Adaptive Layouts)
The interface doesn't just change font size; it changes structure.
*   **Dyslexia Mode**: Increases *whitespace* significantly. Buttons move further apart to prevent accidental clicks. A "Reading Ruler" overlay appears.
*   **ADHD Mode**: "Tunnel Vision". All non-essential toolbars fade out. Only the active text area is highlighted.
*   **Autism Mode**: "Literal UI". Icons are replaced or paired with explicit text labels. No abstract symbols (e.g., no "hamburger" menu without the word "Menu").

### B. "Dual-Coding" Controls
Every major interactive element utilizes two sensory channels:
1.  **Visual**: Icon + distinctive shape.
2.  **Textual**: Clear, plain-language label.
*   *Example*: A "Send" button isn't just a paper plane arrow. It is a button saying "Send Message" with an arrow icon.

## 3. Interaction Design Principles

### A. The "Oops-Proof" Principle
*   **Non-Destructive Actions**: Nothing is deleted permanently without a "Recycle Bin" stage.
*   **Forgiving Input**: If a user clicks slightly outside a button, it should still register (enlarged hit areas).

### B. "State Clarity"
The system must always answer: "What is happening right now?"
*   **No Silent Loading**: If the AI is thinking, show a clear, friendly animation (e.g., "Thinking...").
*   **Success Confirmation**: Explicit confirmation for actions (e.g., "Text Copied!" toast).

## 4. Typography System
*   **Font**: *Atkinson Hyperlegible* (or Open Sans/Inter if unavailable) - designed to distinguish ambiguous characters (1, l, I, 0, O).
*   **Hierarchy**: Massive difference between Headings and Body text to aid scanning.
