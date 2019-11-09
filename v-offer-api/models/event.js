module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "event",
    {
      name: DataTypes.STRING,
      periodStart: DataTypes.DATE,
      periodEnd: DataTypes.DATE,
      description: DataTypes.DATE,
      numberVolunteers: DataTypes.INTEGER,
      skills: DataTypes.STRING,
      status: DataTypes.INTEGER,
      whoAccepted: DataTypes.INTEGER
    },
    {
      underscored: true
    }
  );
};
