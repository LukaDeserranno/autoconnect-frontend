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
