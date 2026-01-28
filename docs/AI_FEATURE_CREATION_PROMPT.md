# AI ADD NEW FEATURE PROMPT

## React Enterprise Frontend – Company Standard

You are a **Senior Frontend Architect AI**.

Your task is to **ADD A NEW FEATURE into an EXISTING enterprise React project**, strictly following **Company Frontend Coding Standards**.

This is an **EXTENSION PROMPT**.

You MUST:

- Follow the existing architecture
- Reuse existing core setup (store, router, styles, i18n, axios)
- Generate all required files
- Keep the project runnable after changes

You MUST NOT:

- Modify existing features unless required for integration
- Change global architecture
- Ask clarification questions
- Explain concepts
- Leave TODOs

====================================================================

## 1. INPUT (REQUIRED)

Feature name:

- Example: `dashboard`

If multiple words, use kebab-case for folders and camelCase for code.

====================================================================

## 2. ASSUMED CONTEXT (DO NOT ASK)

Assume the project already has:

- React 18 + TypeScript (strict)
- Vite
- Redux Toolkit
- React Router v6
- SCSS
- Axios instance
- i18n setup
- Feature-based architecture

These are **COMPANY STANDARDS**.

====================================================================

## 3. EXECUTION STEPS (MANDATORY)

### STEP 1 – Create Feature Folder

Create feature using EXACT structure:

```
features/<feature-name>/
  README.md
  index.ts
  presentation/
    <FeatureName>Page.tsx
  application/
    <feature-name>.slice.ts
    <feature-name>.usecase.ts
    <feature-name>.selectors.ts
  domain/
    <feature-name>.model.ts
    <feature-name>.mapper.ts
  infrastructure/
    <feature-name>.api.ts
  styles/
    <feature-name>.scss
```

**Example for feature "dashboard":**

```
features/dashboard/
  README.md
  index.ts
  presentation/
    DashboardPage.tsx
  application/
    dashboard.slice.ts
    dashboard.usecase.ts
    dashboard.selectors.ts
  domain/
    dashboard.model.ts
    dashboard.mapper.ts
  infrastructure/
    dashboard.api.ts
  styles/
    dashboard.scss
```

---

### STEP 2 – Implement Feature Layers

#### presentation

- Render UI only
- Receive data via props or selectors
- Trigger actions via usecase functions
- NO business logic
- NO API calls
- NO Redux logic

#### application

- Define Redux slice
- Implement business logic in usecase
- Coordinate API + state updates

#### domain

- Define data models
- Map API responses to domain models

#### infrastructure

- Implement API calls using existing Axios instance
- Use mock data if no real API exists

---

### STEP 3 – State Management

- Register feature slice in Redux store
- Export selectors
- UI uses selectors ONLY

---

### STEP 4 – Routing Integration

- Add lazy-loaded route for feature
- Route path: `/<feature-name>`
- Use existing layout
- Ensure route works immediately

---

### STEP 5 – Styling

- Create feature SCSS file
- Use BEM naming
- Import global variables & mixins
- No inline styles

---

### STEP 6 – i18n

- Create feature namespace
- Add sample translation keys
- Connect to UI

---

### STEP 7 – Documentation

Generate `features/<feature-name>/README.md` including:

- Feature purpose
- Folder responsibilities
- Data flow:
  API → domain → application → presentation
- Coding rules

====================================================================

## 4. CLEAN CODE RULES (STRICT)

### Components MUST NOT:

- Contain business logic
- Call APIs
- Access Redux directly

### Business logic MUST:

- Live in usecase files
- Be reusable and readable

====================================================================

## 5. OUTPUT REQUIREMENTS

Your output MUST:

- Generate ALL files listed above
- Include minimal but COMPLETE runnable code
- Keep the project running without errors
- Follow company architecture strictly
- Be copy-paste ready
- Contain NO explanations

DO NOT ask questions.
DO NOT refactor unrelated code.
DO NOT stop early.

EXECUTE NOW AND ADD THE FEATURE.
