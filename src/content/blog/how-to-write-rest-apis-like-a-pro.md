---
title: How to Write REST APIs Like a Pro
description: Creating REST APIs isn't just about making something that works — it's about making something clean, predictable, and developer-friendly. In this guide, you'll learn how to design better REST APIs with simple language, real examples, and best practices. Let's go pro!
tags: ["coding", "backend", "rest", "api"]
date: 2025-05-11
---

## Table of Contents

1. [Naming](#naming)
2. [Filtering](#filtering)
3. [Pagination](#pagination)
4. [Versioning](#versioning)
5. [Batching](#batching)
6. [Documentation](#documentation)
7. [Error Handling](#error-handling)
8. [Security](#security)
9. [Performance](#performance)
10. [Type Safety](#type-safety)
11. [Bonus Tips](#bonus-tips)

---

## Naming

Naming your endpoints well makes your API easy to understand and use.

### Use nouns, not verbs:

Bad:

```http
GET /getUsers
```

Good:

```http
GET /users
```

### Use plural for collections:

```http
/users       // collection
/users/123   // single resource
```

### Use nested routes for relationships:

```http
/users/123/orders
```

Keep it clean, logical, and predictable.

---

## Filtering

Let users filter data without writing complex queries.

### Example:

```http
GET /products?category=shoes&brand=nike
```

- Use query parameters for filters.
- Support multiple filters where needed.

Pro Tip: For advanced cases, allow operators like `gte`, `lte`, `like`, etc.

```http
GET /products?price_gte=100&price_lte=500
```

---

## Pagination

If you have a lot of data, don't return everything at once.

### Use page/limit or cursor-based pagination:

```http
GET /posts?page=2&limit=10
```

Response:

```json
{
  "data": [...],
  "meta": {
    "page": 2,
    "limit": 10,
    "total": 230
  }
}
```

- Make it clear how users can get the next/previous pages.
- Cursor-based is better for large datasets or real-time changes.

---

## Versioning

Never break your existing clients.

### Use version in the URL:

```http
GET /v1/users
```

Or in the header:

```http
GET /users
Accept: application/vnd.myapi.v1+json
```

- Keep older versions stable.
- Plan breaking changes in major versions.

---

## Batching

Let clients send multiple actions in one request.

### Example:

```http
POST /batch
```

Body:

```json
[
  { "method": "GET", "path": "/users/1" },
  { "method": "DELETE", "path": "/orders/55" }
]
```

Useful for reducing network overhead in mobile apps or dashboards.

---

## Documentation

If it’s not documented, it doesn’t exist.

### Use OpenAPI (Swagger) or Postman collections.

Good documentation includes:

- All endpoints with methods
- Request/response examples
- Authentication details
- Error codes and descriptions

Bonus: Make it interactive using Swagger UI.

---

## Error Handling

Don't just return 500 for everything.

### Use meaningful HTTP status codes:

- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

### Return helpful error messages:

```json
{
  "error": {
    "code": 400,
    "message": "Missing 'email' in request body."
  }
}
```

---

## Security

APIs can be public, but not unsafe.

### Things to implement:

- **Authentication**: Use JWT or OAuth 2.0.
- **Authorization**: Ensure users can only access what they should.
- **Rate Limiting**: Prevent abuse (e.g., 100 req/min/user).
- **Input Validation**: Always sanitize inputs to avoid SQL injection, XSS, etc.

---

## Performance

Make it fast and efficient.

### Tips:

- Use proper database indexing
- Avoid N+1 queries
- Use caching (Redis, HTTP cache headers)
- Compress responses (gzip)
- Send only needed fields (use `fields` query param)

```http
GET /users?fields=id,name,email
```

---

## Type Safety

Prevent bugs before they happen.

If you're using JavaScript or Node.js, use TypeScript.

### Example:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = getUser();
```

- Helps avoid runtime errors
- Makes the API easier to consume and debug

---

## Bonus Tips

### Use Idempotency for PUT/PATCH/DELETE

```http
DELETE /orders/123
```

Calling this twice should not crash your app.

### Write tests for your API

Use tools like Postman, Insomnia, or automated testing with Jest, Supertest, or Mocha.

### Stick to conventions

Use JSON as default format. Avoid reinventing the wheel.

### Always return consistent responses

Structure all success and error responses the same way.

```json
{
  "data": {},
  "meta": {},
  "error": null
}
```

---

## Final Thoughts

Writing good REST APIs is about empathy for developers. Clean, secure, and predictable APIs make everyone’s life easier. Follow these principles, and you’ll be well on your way to writing REST APIs like a pro.
