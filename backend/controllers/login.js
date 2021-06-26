const AuthEntity = require("../models/AuthEntity");
const jwt = require("jsonwebtoken");
const {
  JWT_SECRET,
  JWT_EXPIRES_IN,
  CLIENT_SECRET,
  CLIENT_ID,
} = require("../config");
const fetch = require("node-fetch");

module.exports = async function loginUser(req, res, next) {
  const code = req.body.code;
  console.log(code);

  const postRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: "http://localhost:3000/login",
      grant_type: "authorization_code",
    }),
  });

  const json = await postRes.json();

  console.log("post resp: ", json);

  res.json({ message: "not implemented" });
};

const createJwt = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};
