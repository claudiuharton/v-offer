module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "eventUser",
    {},
    {
      underscored: true
    }
  );
};
