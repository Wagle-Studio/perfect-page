# Perfect Page

🐳 Docker - 🚀 Next.js - 📐 Prisma - 🔒 Next Auth - 🗃️ MySQL - 🔎 PHPMyAdmin

## 1. Documentation

[🌳 App tree architecture](<https://tree.nathanfriend.io/?s=(%27op8s!(%27_ncy!true~fullPatKtrailingSlasKrootDot!true)~O(%27O%27src6appF7%7BGYrivate7%7BwebYublic%20showcase7api-96cdnFC*aRhentica8-Next%20ARhEVfigura8*backendZEVtrolWrs-TEalWdqy%209ZjepisoM-Prisma%20T%20to%20interact%20with%20DB*HFHC656uiF25%20UI*G-GQ4Z3sJweb-webQ4Z3ss%27)~versiV!%271%27)*60-%20%2F%2F%200%20%202%20uiEompVentJ3lzXsJ0Lz.tsxZvariabWsX40moWcuWJ0organismJ0globalXss5_cM-No8qlock%20_cM6%5Cn07%20pageJ8tiV9APIjoResC%20RilitiesE%20cF-appGadminH%20hooksJs*Kh!_lse~MtoryOsource!Q20atomJRutTfunc8sVonWleX.scY%7D-pZ*0_faj%20rq%20bzayoR%01zqj_ZYXWVTRQOMKJHGFEC987654320-*>) - [🗺️ App conception](https://www.figma.com/design/w7GQG24IaltwnW70Q1WW6V/Perfect-page?node-id=108-438&t=Tw2K0yKfIMB3sHUt-0) - [🎨 Figma](https://www.figma.com/design/w7GQG24IaltwnW70Q1WW6V/Perfect-page?node-id=0-1&t=Tw2K0yKfIMB3sHUt-0)

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
