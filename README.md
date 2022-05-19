# NoReset Fullstack Web Application

![react](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/readme/React.png)
![express](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/readme/Express.png)
![node](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/readme/Node.png)
![nextjs](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/readme/Next.png)
![tailwind](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/readme/Tailwind.png)
![docker](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/readme/Docker.png)
![caddy](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/readme/Caddy.png)

## What is the Stack?

R - React.js (JavaScript-based UI development library)

E - Express.js (Backend)

N - Node.js (Backend)

N - Next.js (React Framework)

# Getting started

Make sure you have docker installed, docker-compose set up, etc etc. We've been through this a few times, I'll put more instructions up for basic system set up later if need be.

For now, follow these steps in this order:

## Clone this repo

```bash
git clone git@github.com:NoResetSpeedrun/noreset-fullstack.git
```

# Install dev dependecies:

## Frontend

```bash
cd frontend
```

### then

```bash
yarn install
```

## Backend

```bash
cd ../backend
```

### then

```bash
yarn install
```

## init.bat

```bash
cd frontend
yarn install
cd ../backend
yarn install
```

## Start the project

```bash
docker-compose up --build --remove-orphans
```

## Stop the project

```bash
docker-compose down -t 0
```
