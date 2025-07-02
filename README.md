# 🧑‍💻 Social Network API — Modern RESTful Backend

A modular, scalable, and maintainable backend API for a social network, built with **Node.js 20+ + Express + TypeScript + Prisma + PostgreSQL**, and designed following best practices for clear architecture, secure authentication, and robust code quality.

---

## 🗂️ Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Architecture & Technical Decisions](#architecture--technical-decisions)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Best Practices & Conventions](#best-practices--conventions)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

**Social Network API** is a modern, secure RESTful backend powering authentication (JWT), user profiles, posts, likes, and robust error handling. Built for scalability, clarity, and rapid development.

---

## Tech Stack

**Backend**

- Node.js 20+ / Express.js — Fast, minimalist web framework for scalable APIs.
- TypeScript — Static typing for robustness and clarity.
- Prisma ORM — Type-safe data access and migrations for PostgreSQL.
- PostgreSQL (Dockerized) — Reliable, production-grade relational database.
- JWT Authentication (`jsonwebtoken` + `bcrypt`) — Secure token-based authentication.
- ESLint & Prettier — Consistent code style and automatic formatting.
- Docker Compose — Environment management for local development and production.
- Swagger — API documentation and interactive explorer.

> ℹ️ **Note:** The exact Node.js version is specified in the [`.nvmrc`](./.nvmrc) file.

---

## Architecture & Technical Decisions

- **Modular structure:** Controllers, services, routes, and middlewares separated in `/src` for maintainability.
- **ORM:** Prisma for database models and migrations.
- **Security:** JWT-based authentication; passwords hashed with bcrypt.
- **Error handling:** Global error middleware and custom error types for uniform API responses.
- **Documentation:** Swagger UI at `/api/docs` for easy exploration.
- **Dockerized:** Consistent local and production environments via Docker Compose.

---

## Installation & Setup

### Requirements

- Node.js 20+ (see exact version in [.nvmrc](./.nvmrc))
- Docker & Docker Compose

### Environment Variables

Create a `.env` file in the root with the following content:

```env
PORT=3005
NODE_ENV=

POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
POSTGRES_HOST=

DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}?schema=

JWT_SECRET=
```

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/EfeDeveloper/social-network-api.git
cd social-network-api

# Configure the .env file with your variables

# Build and start (first time or after changes in dependencies/build files):
docker compose -f docker-compose.dev.yml up --build

# Normal start:
docker compose -f docker-compose.dev.yml up

# Apply migrations and seed:
docker compose -f docker-compose.dev.yml exec backend npm run prisma:migrate
docker compose -f docker-compose.dev.yml exec backend npm run prisma:seed
```

## Project Structure

```
social-network-api/
├─ src/
│  ├─ controllers/
│  ├─ middlewares/
│  ├─ routes/
│  ├─ services/
│  ├─ types/
│  ├─ utils/
│  ├─ app.ts
│  └─ server.ts
├─ prisma/
│  ├─ schema.prisma
│  └─ seed.ts
├─ docker-compose.dev.yml
├─ Dockerfile
├─ package.json
├─ tsconfig.json
└─ README.md
```

## Best Practices & Conventions

- Strict TypeScript typing: All logic and models are typed for clarity and safety.
- Feature-based modularity: Clear separation for controllers, services, middlewares, and routes.
- JWT & bcrypt for security: Standard authentication and password management.
- Automatic linting & formatting: Prettier & ESLint ensure consistent code.
- Semantic commit messages: Emoji-based and descriptive for clarity.
- Centralized error handling: Custom error types and a single global error middleware.
- Up-to-date API docs: Always accessible via Swagger.
- Dockerized development: Easy to run, consistent environments.

## Contributing

Fork the repo and create a feature branch (feature/add-feature).
Add your code and tests, make sure linting/formatting passes.
Open a clear Pull Request describing your changes.
All contributions are welcome! 🚀

## License

[MIT](LICENSE)
