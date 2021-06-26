const AuthEntity = require("../models/AuthEntity");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../config");

module.exports = async function loginUser(req, res, next) {
  console.log(req.body.code);
  res.json({ message: "not implemented" });
};

const createJwt = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};
