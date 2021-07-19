# Google openid auth

Minimal implementation of authentication with google's openid, and stateless session
management with jsonwebtoken. With nodejs express server that saves users in mongoDB, and
react frontend.

## Installing

After cloning the repository, intall the dependencies of the backend and the frontend.

```shell
cd backend
npm install
```

```shell
cd frontend
npm install
```

### Initial Configuration

The project requires an app that is registered on google developer console. The following environment variables need to be set:

- PORT : port to start the app on
- DB_LINK : mongoDB connection string
- JWT_SECRET
- JWT_EXPIRES_IN
- FRONTEND_HOST : domain and port of the frontend
- CLIENT_ID : registered google apps client id
- CLIEND_SECRET : registered google apps client secret

## Start in development

Start the backend.

```shell
cd backend
npm run start
```

Start the frontend in a separate terminal.

```shell
cd frontend
npm run start
```
