const { Event, EventUser, User } = require("../models");

// router.post("/", eventsController.add);

// router.get("/", eventsController.getConfirmed);

// router.post("/atend", eventsController.atend);

// router.get("/all,", eventsController.getAll);

// router.post("/validate", eventsController.validate);

// router.get("/atenders", eventsController.getAtenders);

const controller = {
  add: async (req, res) => {
    try {
      const authData = {
        token: req.session.token,
        id: req.session.id
      };
      const user = await User.findOne({
        where: { ...authData },
        raw: true
      });

      const event = {
        periodStart: req.body.periodStart,
        periodEnd: req.body.periodEnd,
        name: req.body.name,
        location: req.body.location,
        numberVolunteers: req.body.numberVolunteers,
        status: 0,
        description: req.body.description,
        skills: req.body.skills,
        user_id: user.id
      };

      await Event.create(event);

      res.status(201).send({ message: "Event created" });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  getConfirmed: async (req, res) => {
    try {
      const authData = {
        token: req.session.token,
        id: req.session.id
      };
      const user = await User.findOne({
        where: { ...authData },
        raw: true
      });

      const events = await Promise.all(
        await Event.findAll({ where: { status: 1 }, raw: true }).map(
          async item => {
            const eventUser = await User.findOne({
              where: {
                id: item.user_id
              },
              attributes: ["firstName", "lastName", "email", "phone"]
            });
            return { ...item, eventUser };
          }
        )
      );

      res.status(200).send(events);
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  getAll: async (req, res) => {
    const authData = {
      token: req.session.token,
      id: req.session.id
    };
    const user = await User.findOne({
      where: { ...authData },
      raw: true
    });

    try {
      const authData = {
        token: req.session.token,
        id: req.session.id
      };
      const user = await User.findOne({
        where: { ...authData },
        raw: true
      });

      const events = await Promise.all(
        await Event.findAll({ raw: true }).map(async item => {
          const eventUser = await User.findOne({
            where: {
              id: item.user_id
            },
            attributes: ["firstName", "lastName", "email", "phone"]
          });
          return { ...item, eventUser };
        })
      );

      res.status(200).send(events);
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  getUserEvents: async (req, res) => {
    const authData = {
      token: req.session.token,
      id: req.session.id
    };
    const user = await User.findOne({
      where: { ...authData },
      raw: true
    });

    try {
      const authData = {
        token: req.session.token,
        id: req.session.id
      };
      const user = await User.findOne({
        where: { ...authData },
        raw: true
      });

      const events = await Promise.all(
        await Event.findAll({ where: { user_id: user.id }, raw: true }).map(
          async item => {
            const volunteers = await Promise.all(
              await EventUser.findAll({
                where: { user_id: user.id },
                raw: true
              }).map(async item => {
                const volunteer = await User.findOne({
                  where: {
                    id: item.user_id
                  },
                  attributes: ["firstName", "lastName", "email", "phone"]
                });
                return { ...item, volunteer };
              })
            );

            return { ...item, volunteers };
          }
        )
      );

      res.status(200).send(events);
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  validate: async (req, res) => {
    try {
      const authData = {
        token: req.session.token,
        id: req.session.id
      };
      const user = await User.findOne({
        where: { ...authData },
        raw: true
      });

      const id = req.body.eventId;

      const event = await Event.findOne({ where: { id } });

      if (event) {
        await event.update({ ...event, status: 1 });
      }

      res.status(200).send({ message: "Event validated" });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  getAtenders: async (req, res) => {
    const authData = {
      token: req.session.token,
      id: req.session.id
    };
    const user = await User.findOne({
      where: { ...authData },
      raw: true
    });
  },
  attendingEvents: async (req, res) => {
    try {
      const authData = {
        token: req.session.token,
        id: req.session.id
      };
      const user = await User.findOne({
        where: { ...authData },
        raw: true
      });

      const events = await Promise.all(
        await EventUser.findAll({ where: { user_id: user.id }, raw: true }).map(
          async item => {
            const info = await Event.findOne({
              where: {
                id: item.event_id
              }
            });

            const organisator = await User.findOne({
              where: { id: user.id },
              attributes: ["firstName", "lastName", "email", "phone"]
            });

            return { ...item, info, organisator };
          }
        )
      );

      res.status(200).send(events);
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  attend: async (req, res) => {
    try {
      const authData = {
        token: req.session.token,
        id: req.session.id
      };
      const user = await User.findOne({
        where: { ...authData },
        raw: true
      });

      const eventsId = req.body;

      await Promise.all(
        eventsId.map(async item => {
          await EventUser.create({ user_id: user.id, event_id: item });
        })
      );

      res.status(200).send({ message: "Attending" });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

module.exports = controller;
