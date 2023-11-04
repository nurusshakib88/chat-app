const express = require("express");

const { authUser } = require("../controllers/UserControllers");
const { registerUser } = require("../controllers/UserControllers");

const router = express.Router();

router.post("/", registerUser);

router.post("/login", authUser);

module.exports = router;
