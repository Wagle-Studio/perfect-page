# Perfect Page

🐳 Docker - 🚀 Next.js - 📐 Prisma - 🔒 Next Auth - 🗃️ MySQL - 🔎 PHPMyAdmin

## 1. Documentation

[🌳 App tree architecture](<https://tree.nathanfriend.io/?s=(%27op6s!(%27fancy!true~fullPatWtrailingSlasWrootDot!true)~q(%27q%27src7J0J9%7BM%7D0privaK9%7Bweb%7D0public%20showcase9api0G7cdn0JQ-aZentica6Econfigura6-backend8%20controllers0Rcalled%20by%20G8%20repositories0Prisma%20Rto%20inKracYwith%20DB-V0JVQ757ui0J25%20UI-M0MX483ss-web0webX483ss88%5Cnsrc7J-api8user8*inKgra6_key8HKsYNojinKgrajkey8*CHcreaKFser%20C**PUT%3AFpdaK%20CaZ8*%5B...nextaZ%5D8**rouK.tsEAPI%27)~version!%271%27)*%20%20-7*0%20%2F%2F%202Fi%20components-3layout.scss8Layout.tsx8variables.sc4*molecules8organisms8global.scss5z0Nojblock%20z6tion7%5Cn*8-*9%20pages-Csettings8E0NexYAZ%20F%20uGAPI%20rouKsH**POST%3A%20JappKteMadminQFtilitiesRfunc6s%20V%20hooksWh!false~X2*atoms-Yt%20Zuthj6%20qsource!zfactory%01zqjZYXWVRQMKJHGFEC987654320-*>) - [🗺️ App conception](https://www.figma.com/design/w7GQG24IaltwnW70Q1WW6V/Perfect-page?node-id=108-438&t=Tw2K0yKfIMB3sHUt-0) - [🎨 Figma](https://www.figma.com/design/w7GQG24IaltwnW70Q1WW6V/Perfect-page?node-id=0-1&t=Tw2K0yKfIMB3sHUt-0)

## 2. Installation

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
