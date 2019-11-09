const db = require("../config").db;

const User = db.import("./user");
const Event = db.import("./event");

const EventUser = db.import("./eventUser");

Event.belongsTo(User, {
  onDelete: "Cascade"
});

EventUser.belongsTo(User, {
  onDelete: "Cascade"
});
EventUser.belongsTo(Event, {
  onDelete: "Cascade"
});

module.exports = {
  User,
  Event,
  EventUser,
  connection: db
};
