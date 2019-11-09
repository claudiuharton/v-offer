const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const otherRouter = require("./other");

const authController = require("../controllers").auth;
const eventRouter = require("./events");

router.use("/", otherRouter);
router.use("/auth", authRouter);

router.use("/events", authController.loginCheck, eventRouter);

module.exports = router;
