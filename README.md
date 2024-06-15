# Perfect Page

🐳 Docker - 🚀 Next.js - 📐 Prisma - 🔒 Next Auth - 🗃️ MySQL - 🔎 PHPMyAdmin

## 1. Installation

Create the environment file and fill in the variables.

ℹ️ All environment variables used throughout the project are declared in the file at the root of the project.

```bash
cp .env.example .env
```

Install the frontend project libraries.

```bash
cd frontend && npm install
```

Start the Docker containers from the root of the project.

```bash
cd .. && docker-compose up --build
```

Grant the necessary permissions to the MySQL user with the following command.

ℹ️ Make sure to change the username to match the one in the environment file. The password requested is the one corresponding to the user.

```bash
docker-compose exec db mysql -u root -p -e "GRANT CREATE, ALTER, DROP, REFERENCES ON *.* TO 'DATABASE_USER_TO_REPLACE'@'%'; FLUSH PRIVILEGES;"
```

Run the migrations and generate the Prisma client.

```bash
docker-compose exec frontend npx prisma migrate dev
```

## 2. Available Applications

- [Next.js](http://localhost:3000)
- [PHPMyAdmin](http://localhost:8080)
