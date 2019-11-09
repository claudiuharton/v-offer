const express = require("express");
const router = express.Router();
const authController = require("../controllers").auth;

router.post("/login", authController.login);
router.post("/register", authController.create);
router.get("/logout", authController.loginCheck, authController.logout);
router.post(
  "/addAdmin",
  authController.loginCheck,
  authController.adminCheck,
  authController.addAdmin
);

module.exports = router;
