const connection = require("../models").connection;

const controller = {
  reset: (req, res) => {
    connection
      .sync({ force: true })
      .then(() => {
        res.status(201).send({
          message: "Database reset"
        });
      })
      .catch(() => {
        res.status(500).send({
          message: "Error"
        });
      });
  }
};

module.exports = controller;
