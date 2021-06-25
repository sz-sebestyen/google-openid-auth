const express = require("express");
const router = express.Router();

router.get("/private", require("../controllers/private"));
router.get("/public", require("../controllers/public"));

router.post("/login", require("../controllers/login"));

module.exports = router;
