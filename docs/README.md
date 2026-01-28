# 🧠 AI-DRIVEN FRONTEND DEVELOPMENT PLAYBOOK

## Enterprise React Project – Company Standard

> This document defines how our company builds Frontend projects using AI Prompt.
> It is both a **presentation script** and a **production-ready prompt library**.

====================================================================

# PHẦN A – THUYẾT TRÌNH / TRAINING (READ-ONLY)

## 1. Vì sao dùng AI Prompt để dựng Frontend Project?

### Vấn đề truyền thống

- Setup dự án mất nhiều thời gian
- Mỗi dev dựng một kiểu → khó maintain
- Junior không biết bắt đầu từ đâu
- Project scale → kiến trúc vỡ
- Review & refactor tốn effort

### Giải pháp

👉 **Prompt-Driven Development**

- Prompt = Kiến trúc + Coding Guideline
- AI = Senior Frontend Architect + Generator
- Developer = Quyết định nghiệp vụ & ownership

> AI không thay dev  
> AI thay những setup kém chất lượng

---

## 2. AI làm gì – Con người làm gì?

### AI làm tốt

- Generate boilerplate
- Tạo cấu trúc chuẩn
- Lặp lại pattern không lỗi
- Tạo feature nhanh

### Con người chịu trách nhiệm

- Kiến trúc
- Business logic
- Trade-off kỹ thuật
- Review & maintain

---

## 3. Những thứ AI KHÔNG được hỏi (Company Standard)

Trước khi dùng AI, mặc định đã có:

- Node.js ≥ 20.19+ hoặc 22.12+
- React 18 + TypeScript (strict)
- Vite
- Redux Toolkit
- React Router v6
- SCSS (modern `@use` syntax)
- Axios
- react-i18next
- ESLint + Prettier

⚠️ AI **KHÔNG được hỏi lại các thông tin này**

---

## 4. Quy trình dựng project bằng AI Prompt

1. Khởi tạo project chạy được
2. Áp kiến trúc enterprise
3. Dựng layout & app shell
4. Setup auth & error handling
5. Tạo feature
6. Thêm screen
7. Scale project bằng prompt

---

## 5. Hiểu đúng về Feature (cho Junior / Non-code)

### 1 Feature là gì?

Một **feature** = một nhóm chức năng hoàn chỉnh  
Ví dụ: Home, Auth, Dashboard

### Cấu trúc feature chuẩn

```
features/<feature-name>/
  presentation/  -> UI Components
  application/   -> Business Logic & Redux
  domain/        -> Models & Mappers
  infrastructure/ -> API & persistence
```

### Luật vàng

❌ Component KHÔNG:

- Gọi API
- Viết logic phức tạp
- Xử lý Redux

✅ Component CHỈ:

- Nhận data
- Render UI
- Gọi hàm từ usecase

---

====================================================================

# PHẦN B – PROMPT LIBRARY (COPY & DEMO)

> Các prompt bên dưới dùng trực tiếp với AI Code  
> AI **KHÔNG được hỏi lại**  
> AI **PHẢI tạo code runnable**

---

## PROMPT 01 – Khởi tạo project chạy được ngay

````markdown
You are a Senior Frontend Architect AI.

Initialize a COMPLETE enterprise React frontend project.

DO NOT ask any questions.
DO NOT explain.
JUST GENERATE CODE.

Assume:

- React 18
- TypeScript (strict)
- Vite
- React Router v6
- Redux Toolkit
- SCSS (modern @use syntax)
- Axios
- react-i18next
- ESLint + Prettier

Requirements:

1. Project runs after install
2. Setup Redux store
3. Setup router
4. Setup i18n
5. Create Home page
6. Add route "/"
7. Add README.md

**CRITICAL - SASS CONFIGURATION:**

MUST use modern `@use` syntax (NOT deprecated `@import`):

src/styles/\_variables.scss:

- Define all design tokens

src/styles/\_mixins.scss:

```scss
@use "./variables" as *;
// Define mixins here
```
````

src/styles/global.scss:

```scss
@use "./variables" as *;
@use "./mixins" as *;
@use "sass:color";
```

Feature SCSS files:

```scss
@use "@styles/variables" as *;
@use "@styles/mixins" as *;
```

**Color Functions:**

- Use `color.adjust($color, $lightness: -10%)` instead of `darken()`
- Import `sass:color` module when needed

Generate full folder structure and runnable code.

````

---

## PROMPT 02 – Áp kiến trúc Enterprise (Feature-based)

```markdown
Refactor the project to enterprise feature-based architecture.

Rules:
- Feature-based folders
- One Redux slice per feature
- No business logic in components
- Clear separation of layers

Keep application runnable.
````

---

## PROMPT 03 – Layout & App Shell

```markdown
Create application shell.

Requirements:

- MainLayout with Header
- ErrorBoundary at app level
- Global loading fallback
- AuthGuard placeholder

Integrate with routing system.
```

---

## PROMPT 04 – Auth Infrastructure (Mock)

```markdown
Add authentication infrastructure.

Include:

- auth feature
- auth.slice.ts
- auth.usecase.ts
- auth.selectors.ts
- mock login/logout
- protected routes

No UI styling required.
```

---

## PROMPT 05 – Feature Template (BẮT BUỘC)

Generate feature "home".

Follow structure:

```
features/home/
  README.md
  index.ts
  presentation/
    HomePage.tsx
  application/
    home.slice.ts
    home.usecase.ts
    home.selectors.ts
  domain/
    home.model.ts
    home.mapper.ts
  infrastructure/
    home.api.ts
  styles/
    home.scss
```

Rules:

- UI only in presentation
- Business logic in usecase
- API calls in infrastructure
- Mapping in domain

**SCSS Rules:**

- Use `@use "@styles/variables" as *;`
- Use `@use "@styles/mixins" as *;`
- NO `@import` statements

---

## PROMPT 06 – Thêm Screen mới

```markdown
Add new screen "Profile" inside home feature.

Rules:

- Presentation only
- Data via selectors
- Actions via usecase
- Add route "/profile"

Do not break existing code.
```

---

## PROMPT 07 – Error Handling Strategy

```markdown
Implement standardized error handling.

Include:

- Axios interceptor
- Error model
- Feature-level error state
- Global fallback UI
```

---

## PROMPT 08 – Thêm Feature mới (Scale)

```markdown
Add feature "dashboard".

Include:

- Feature folder
- Redux slice
- Mock API
- Dashboard page
- Route "/dashboard"
- Feature README.md

Follow company architecture strictly.

**SCSS:**

- Use modern `@use` syntax
- Import variables and mixins properly
```

---

## PROMPT 09 – Documentation Generator

```markdown
Generate documentation.

1. Root README.md:
   - Project overview
   - Architecture explanation
   - How to add new feature

2. Feature README template:
   - Feature purpose
   - Layer responsibilities
   - Data flow
   - Rules
```

---

## PROMPT 10 – Fix Sass Deprecation Warnings

```markdown
Fix all Sass deprecation warnings.

Tasks:

1. Replace all `@import` with `@use` syntax
2. Add `@use "./variables" as *;` to \_mixins.scss
3. Replace `darken()` with `color.adjust()`
4. Import `sass:color` where needed

Rules:

- `@use` provides module scoping
- Variables must be explicitly imported in each file
- Use `as *` to access variables without namespace

Verify no deprecation warnings remain.
```

---

====================================================================

# PHẦN C – SASS BEST PRACTICES (CRITICAL)

## ⚠️ Vấn đề với `@import` (Deprecated)

Sass `@import` sẽ bị loại bỏ trong Dart Sass 3.0.0.

### Lỗi thường gặp:

```
Deprecation Warning [import]: Sass @import rules are deprecated
Deprecation Warning [color-functions]: darken() is deprecated
```

## ✅ Giải pháp: Dùng `@use`

### Cấu trúc chuẩn:

**src/styles/\_variables.scss:**

```scss
// Colors, spacing, typography, etc.
$primary-color: #3b82f6;
$spacing-md: 1rem;
```

**src/styles/\_mixins.scss:**

```scss
@use "./variables" as *; // CRITICAL: Import variables first

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**src/styles/global.scss:**

```scss
@use "./variables" as *;
@use "./mixins" as *;
@use "sass:color"; // For color functions

a {
  &:hover {
    color: color.adjust($primary-color, $lightness: -10%);
  }
}
```

**Feature SCSS (e.g., home.scss):**

```scss
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

.home-page {
  padding: $spacing-md;
  @include flex-center;
}
```

### Quy tắc bắt buộc:

1. ✅ Dùng `@use` thay vì `@import`
2. ✅ `_mixins.scss` PHẢI import `_variables.scss`
3. ✅ Dùng `color.adjust()` thay vì `darken()`
4. ✅ Import `sass:color` khi dùng color functions
5. ✅ Dùng `as *` để truy cập variables trực tiếp

### Tại sao quan trọng?

- ❌ `@import` → Global scope → Namespace pollution
- ✅ `@use` → Module scope → Clean separation
- 🚀 Tương thích Dart Sass 3.0.0
- 🎯 Không có deprecation warnings

---

====================================================================

# KẾT LUẬN

**Prompt = Tài sản công ty**

**AI = Nhân bản Senior Engineer**

**Junior = Code đúng từ ngày đầu**

**Project = Dễ scale, dễ maintain**

> AI không thay dev – AI thay setup kém chất lượng

---

## 📚 Tài liệu tham khảo

- [Sass @use Documentation](https://sass-lang.com/documentation/at-rules/use)
- [Sass Color Functions](https://sass-lang.com/documentation/modules/color)
- [Dart Sass Migration Guide](https://sass-lang.com/d/import)
