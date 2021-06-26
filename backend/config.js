require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DB_LINK: process.env.DB_LINK,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: parseInt(process.env.JWT_EXPIRES_IN),
  FRONTEND_HOST: process.env.FRONTEND_HOST,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};
