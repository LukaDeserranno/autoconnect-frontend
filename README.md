[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/TA_3CB_a)
# Examenopdracht Front-end Web Development

- Student: Luka Deserranno
- Studentennummer: 202293301
- E-mailadres: <mailto:luka.deserranno@student.hogent.be>

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)

## Opstarten

Install all dependencies using the following command:

```bash
yarn install
```

Create a `.env` with the following content and apply to your configuration:

```dotenv
VITE_API_URL=http://localhost:9000/api
```

Start the app using `yarn dev`. It runs on <http://localhost:5137> by default.

## Testen

gebruik onderstaand commando om alle testen te laten lopen:
```bash
yarn cypress run
```
