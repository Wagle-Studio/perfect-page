# Perfect Page

🐳 Docker - 🚀 Next.js - 📐 Prisma - 🔒 Next Auth - 🗃️ MySQL - 🔎 PHPMyAdmin

## 1. Documentation

[🌳 App tree architecture](https://tree.nathanfriend.io/?s=(%27op8s!(%27Yncy!true~fullPatKtrailingSlasKrootDot!true)~M(%27M%27src6appFzGVrivaR%20dashboardzwebVublic%20showcase7api-96cdnFC*authenXca8-Next%20AuthEQfigura8*backend*0EQtrolTrs-OEalTdjy%209*0ZepisoL-Prisma%20O%20to%20inRract%20with%20DB*JFJC646uiF24%20UI*G-G253Hweb-web253H%27)~versiQ!%271%27)*60-%20%2F%2F%200%20%202_iEompQentH3RmplaRWglobalqWvariabTsq4YcL-No8jlock%20YcL50atomWmoTcuTWorganismW6%5Cn07%20pageH8XQ9APIZouRsC_XliXesE%20cF-appGadminHs*J%20hooksKh!Ylse~LtoryMsource!Ofunc8sQonRteTleV%7D-pWH0XtiYfaZ%20r_%20uj%20bq.scsz7%7B%01zqj_ZYXWVTRQOMLKJHGFEC987654320-*) - [🗺️ App conception](https://www.figma.com/design/w7GQG24IaltwnW70Q1WW6V/Perfect-page?node-id=108-438&t=Tw2K0yKfIMB3sHUt-0) - [🎨 Figma](https://www.figma.com/design/w7GQG24IaltwnW70Q1WW6V/Perfect-page?node-id=0-1&t=Tw2K0yKfIMB3sHUt-0)

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
