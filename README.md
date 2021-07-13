# Google openid auth

Implements authentication with googles openid. Users are saved in mongodb. Also uses Bearer token sessions.

## Installing

After cloning the repository, intall the dependencies.

```shell
npm install
```

### Initial Configuration

The project requires an app that is registered on google developer console. The following environment variables need to be set:

- PORT : port to start the app on
- DB_LINK : mongoDB connection string
- JWT_SECRET
- JWT_EXPIRES_IN
- FRONTEND_HOST
- CLIENT_ID : registered google apps client id
- CLIEND_SECRET : registered google apps client secret

## Start in development

Start the backend.

```shell
cd backend
npm run start
```

Start the frontend. Open a new terminal.

```shell
cd frontend
npm run start
```
