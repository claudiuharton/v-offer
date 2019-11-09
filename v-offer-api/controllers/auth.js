const UserDb = require("../models").User;

const controller = {
  create: async (req, res) => {
    try {
      const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        isAdmin: false,
        password: req.body.password,
        token: Math.random().toString(36)
      };

      let errors = [];

      let existingUser = await UserDb.findOne({ where: { email: user.email } });

      if (
        !user.firstName ||
        !user.lastName ||
        !user.email ||
        !user.phone ||
        !user.password
      ) {
        errors.push("One or some of the fields weren't filled");
      }

      if (existingUser) {
        errors.push("Email already used");
      }

      if (errors.length === 0) {
        UserDb.create(user)
          .then(user => {
            res.status(200).send({
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              phone: user.phone,
              email: user.email
            });
          })
          .catch(user => {
            res.status(500).send({
              message: "DB error"
            });
          });
      } else {
        res.status(400).send({ errors });
      }
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  login: async (req, res) => {
    const u = await UserDb.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      },
      raw: true
    });
    if (!u) {
      res.status(403).send({ message: "Incorrect email/password" });
    } else {
      if (req.session.id) {
        res.status(202).send({ message: "Already logged in" });
      } else {
        req.session.id = u.id;
        req.session.token = u.token;
        res.status(200).send({ message: "Successful login" });
      }
    }
  },
  addAdmin: async (req, res) => {
    try {
      const email = req.body.email;

      const existingEmail = await UserDb.findOne({ where: { email } });

      if (existingEmail) {
        await existingEmail.update({ isAdmin: true, ...existingEmail });
      }

      res.status(200).send({
        message: `User: ${existingEmail.firstName} ${existingEmail.lastName} is an admin now.`
      });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },

  loginCheck: async (req, res, next) => {
    const authData = {
      token: req.session.token,
      id: req.session.id
    };
    const user = await UserDb.findOne({
      where: { ...authData },
      raw: true
    });
    !user ? res.status(403).send({ message: "Forbidden" }) : next();
  },
  adminCheck: async (req, res, next) => {
    const authData = {
      token: req.session.token,
      id: req.session.id
    };
    const user = await UserDb.findOne({
      where: { ...authData },
      raw: true
    });
    !user.isAdmin ? res.status(403).send({ message: "Forbidden" }) : next();
  },
  logout: async (req, res) => {
    req.session.reset();
    res.status(200).send({ message: "Successfull log out!" });
  }
};

module.exports = controller;
