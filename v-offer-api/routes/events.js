const express = require("express");
const router = express.Router();
const eventsController = require("../controllers").events;
const authController = require("../controllers").auth;
router.post("/", eventsController.add);

router.get("/", eventsController.getConfirmed);

router.post("/attend", eventsController.attend);

router.get("/attend", eventsController.attendingEvents);

router.get("/all", authController.adminCheck, eventsController.getAll);

router.post("/validate", authController.adminCheck, eventsController.validate);

router.get("/myEvents", eventsController.getUserEvents);

module.exports = router;
