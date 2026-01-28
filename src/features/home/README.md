# Feature: Home

## Purpose

Trang chủ của ứng dụng - hiển thị thông tin chào mừng và danh sách các tính năng chính

## Layers

- **presentation**: UI components - HomePage, WelcomeSection
- **application**: Redux slice quản lý trạng thái trang chủ
- **domain**: Data models cho home feature
- **infrastructure**: API calls (nếu cần)

## Data Flow

```
UI → usecase → domain mapper → API
API response → domain mapper → Redux → UI
```

## Rules

- No business logic in components
- No API calls in components
- Redux only in application layer

## How to Extend

1. Update `domain/models.ts` - thêm model mới
2. Update `application/usecases/` - thêm use case mới
3. Update `application/slice.ts` - thêm actions/reducers
4. Update `presentation/` components - cập nhật UI
