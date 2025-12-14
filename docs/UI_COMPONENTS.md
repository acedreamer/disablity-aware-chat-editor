# Component Design: Disability-Aware Chat Editor

This document details the specific UI elements, their behavior, and design specs to ensure the "Calm Clarity" philosophy is met.

## 1. The Main Layout ("The Split-Brain")

A split-screen view is the most intuitive for before/after comparison.

*   **Structure**: Two large, equal-width cards side-by-side (stacks vertically on mobile).
*   **Gutter**: A distinct central gutter active as the "Transformation Zone" (contains the `Execute` button).
*   **Background**: `Warm Grey` (#F5F6FA) canvas to frame the white/off-white content cards.

## 2. Input/Output Cards

### A. The Input Card (Left/Top)
*   **Visuals**: Clean, white background.
*   **Typography**:
    *   Font size: 18px (default) - larger than standard.
    *   Line height: 1.6.
*   **Placeholder**: "Paste your text here..." (High contrast grey, not faint).
*   **Actions**: `Paste`, `Clear`.

### B. The Output Card (Right/Bottom)
*   **Visuals**: Slightly distinct background color (e.g., extremely pale blue tint `#F0F8FF`) to subtly indicate "Results Area".
*   **State**: Read-only mainly, but selectable.
*   **Diff Highlighting**:
    *   **Additions**: Green underline (bold).
    *   **Removals**: Red strikethrough (faded).
    *   *Note*: Color-blind modes will use icons/patterns instead of just color.

## 3. The Control Center ("Transformation Bar")

This is the bridge between Input and Output.

*   **Location**: Centered between the two cards (or floating bottom on mobile).
*   **Primary Action**: The `Transform` Button.
    *   **Shape**: Pill-shaped or Rounded Rectangle.
    *   **Size**: Massive (minimum 60px height).
    *   **Label**: "Make it Simple" (or "Rewrite").
    *   **Icon**: Magic Wand or Arrow.
*   **Mode Toggles**: Segmented Control (Tabs) rather than a hidden dropdown.
    *   `[ Dyslexia ] [ ADHD ] [ Autism ]`
    *   *Interaction*: One click to switch modes. Immediate visual feedback (border highlight).

## 4. Floating Action Buttons (FABs)

Secondary actions should not clutter the main view but be easily accessible.

*   **Copy to Clipboard**:
    *   Large icon button.
    *   Fills with checkmark animation on click.
*   **Text-to-Speech (TTS)**:
    *   Speaker icon.
    *   Highlights words as they are spoken (Karaoke style).

## 5. Feedback Mechanisms (Toasts & Modals)

*   **Toasts**: Appears at the *top center* (most visible area).
    *   Large text.
    *   High contrast background (Dark Slate with White text).
    *   Stays for at least 4 seconds (longer reading time).
*   **Loading State**:
    *   Instead of a spinner, use a "Skeleton Loader" or a progress bar text: "Reading...", "Simplifying...", "Done!".

## 6. Accessibility Settings Panel (The "Settings Gear")

A dedicated modal to fine-tune the experience.

*   **Font Size Slider**: Controls 14px to 32px.
*   **OpenDyslexic Toggle**: Switches font globally.
*   **Dark/High-Contrast Mode Toggle**.
