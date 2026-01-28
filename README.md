# Enterprise React App

A production-ready React + TypeScript application following enterprise standards with feature-based architecture.

## 🏗️ Architecture

This project follows a **feature-based architecture** with strict layer separation:

- **presentation/** - UI components only (no logic)
- **application/** - Business logic & Redux slices
- **domain/** - Data models & transformations
- **infrastructure/** - API calls & external services

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript (strict mode)
- **Bundler**: Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Styling**: SCSS (BEM naming)
- **HTTP Client**: Axios
- **Storage**: IndexedDB (localForage)
- **i18n**: react-i18next

## 📁 Project Structure

```
src/
├── assets/              # Static files (images, fonts)
├── shared/              # Reusable components, hooks, utils
│   ├── components/
│   ├── hooks/
│   └── utils/
├── features/            # Business features
│   └── home/
│       ├── README.md
│       ├── index.ts
│       ├── presentation/      # UI components
│       ├── application/       # Redux & business logic
│       ├── domain/            # Models & mappers
│       ├── infrastructure/    # API calls
│       └── styles/            # Feature styles
├── routes/              # Routing configuration
├── app/                 # Redux store setup
├── db/                  # IndexedDB configuration
├── styles/              # Global SCSS
├── App.tsx
└── main.tsx
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Creating a New Feature

1. **Create feature folder structure**:

```bash
mkdir -p src/features/my-feature/{presentation/components,application/usecases,domain,infrastructure,styles}
```

2. **Create README.md** in the feature folder

3. **Define domain models** in `domain/models.ts`

4. **Create API layer** in `infrastructure/api.ts`

5. **Create data mappers** in `domain/mappers.ts`

6. **Create use cases** in `application/usecases/`

7. **Create Redux slice** in `application/slice.ts`

8. **Create selectors** in `application/selectors.ts`

9. **Create UI components** in `presentation/`

10. **Export public API** in `index.ts`

11. **Add reducer to store** in `src/app/store.ts`

## 🎯 Golden Rules

### ❌ Components MUST NOT contain:

- Business logic (if/else/switch)
- API calls
- Data transformation
- Complex calculations

### ✅ Components SHOULD only:

- Render UI
- Handle user interactions
- Call hooks from application layer

## 📚 Code Examples

### Good Component (Clean)

```tsx
export const UserProfile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return <div>{user?.name}</div>;
};
```

### Bad Component (Dirty)

```tsx
// ❌ DON'T DO THIS
export const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/api/user").then((res) => {
      const mapped = {
        name: res.data.full_name,
        email: res.data.email_address,
      };
      setUser(mapped);
    });
  }, []);

  return <div>{user?.name}</div>;
};
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

### TypeScript Path Aliases

The following aliases are configured:

- `@/*` → `src/*`
- `@shared/*` → `src/shared/*`
- `@features/*` → `src/features/*`
- `@app/*` → `src/app/*`
- `@routes/*` → `src/routes/*`
- `@styles/*` → `src/styles/*`

## 📖 Documentation

- Each feature has its own `README.md` explaining its purpose and structure
- See `src/features/home/README.md` for an example

## 🤝 Contributing

1. Follow the feature-based architecture
2. Keep components clean (no logic)
3. Use TypeScript strict mode
4. Follow BEM naming for CSS
5. Write tests for business logic
6. Update feature README when making changes

## 📄 License

MIT
