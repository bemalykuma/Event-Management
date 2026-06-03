# Event Management System

A web-based Event Management System built with **Nuxt 4**, **TypeScript**, **Drizzle ORM**, and **PostgreSQL**.

## Features

* Create events
* View event details
* Edit events
* Delete events
* Register participants
* Manage participant limits

---

## Tech Stack

* Nuxt 4
* TypeScript
* PostgreSQL
* Drizzle ORM
* Tailwind CSS
* Shadcn Vue

---

## Prerequisites

Before running the project, make sure you have:

* Node.js (v20+ recommended)
* PostgreSQL
* Git

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd project
```

### 2. Create a PostgreSQL database

```sql
CREATE DATABASE Event;
```

### 3. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Open the `.env` file and update the `DATABASE_URL` to match your PostgreSQL configuration.

Example:

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/Event
```

Make sure the following values match the PostgreSQL database you created:

* **Username** → PostgreSQL username
* **Password** → PostgreSQL password
* **Database Name** → The database created in Step 2

For example, if you created:

```sql
CREATE DATABASE Event;
```

and your PostgreSQL credentials are:

```text
Username: postgres
Password: 123456
```

then your connection string should be:

```env
DATABASE_URL=postgresql://postgres:123456@localhost:5432/Event
```


### 4. Install dependencies

```bash
npm install
```

### 5. Run database migrations

```bash
npx drizzle-kit migrate
```

### 6. Seed sample data

```bash
npm run db:seed
```

### 7. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## Notes

If you need to reset the database:

```bash
npx drizzle-kit migrate
npm run db:seed
```

Sample data will be generated automatically for testing purposes.
