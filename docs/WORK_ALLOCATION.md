# Design Team: Work Allocation & Roles

Based on the **Disability-Aware Chat Editor** project scope, here is the breakdown of responsibilities for the design phase.

**Team Members:** Abishek S, Karthik B, Alfred Jaison, Ashish S.

---

## 1. Abishek S — Chief Architect & Layout Lead

**Role:** The "structure builder". Responsible for the skeleton of the application.

* **Primary Task**: Constructing the **Split-Screen Grid System**.
* **Specific Responsibilities**:
  * Create the main `index.html` structure.
  * Implement the CSS Grid/Flexbox layout for the two main cards (Input vs. Output).
  * Ensure the layout is **Responsive** (stacks correctly on mobile vs. desktop).
  * *Deliverable*: A working empty shell with three zones: Left Card, Center Gutter, Right Card.

## 2. Karthik B — Visual Designer (Theming)

**Role:** The "artist". Responsible for the look, colors, and typography.

* **Primary Task**: Defining the **Design System**.
* **Specific Responsibilities**:
  * Create the `variables.css` file.
  * Define the Color Palette (Teal, Warm Grey, etc.) as detailed in the Philosophy doc.
  * Select and import fonts (e.g., *Atkinson Hyperlegible*, *Open Sans*).
  * Design the "Glassmorphism" effects and subtle shadows.
  * *Deliverable*: The global CSS stylesheet that makes the HTML look beautiful.

## 3. Alfred Jaison — Component Engineer

**Role:** The "mechanic". Responsible for individual interactive elements.

* **Primary Task**: Building the **Control Center & Buttons**.
* **Specific Responsibilities**:
  * Design the central "Transform" button (making it large, pill-shaped, and interactive).
  * Create the "Mode Toggle" tabs (Dyslexia/ADHD/Autism).
  * Style the Input/Output text areas (rounded corners, focus states).
  * Implement "Floating Action Buttons" (Copy, Speak).
  * *Deliverable*: A CSS file specifically for buttons, inputs, and toggles (`components.css`).

## 4. Ashish S — Accessibility Specialist

**Role:** The "auditor". Responsible for the special accessibility modes.

* **Primary Task**: Designing the **Adaptive Overrides**.
* **Specific Responsibilities**:
  * Create the specific CSS classes for **Dyslexia Mode** (extra letter spacing, ruler overlay).
  * Create the **High Contrast Mode** (Yellow on Black).
  * Design the "Tooltips" and "Help" modals.
  * Verify that all text has sufficient contrast ratios.
  * *Deliverable*: The `accessibility.css` file with overrides for each mode.

---

## Collaborative Workflow

1. **Abishek** builds the house (HTML).
2. **Karthik** paints the walls (Global CSS).
3. **Alfred** brings in the furniture (Buttons/Inputs).
4. **Ashish** installs the wheelchair ramps and safety rails (Accessibility Features).
