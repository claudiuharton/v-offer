const auth = require("./auth");
const other = require("./other");
const events = require("./events");

const controllers = {
  auth,
  other,
  events
};

module.exports = controllers;
