module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      available: DataTypes.BOOLEAN,
      isAdmin: DataTypes.BOOLEAN,
      periodStart: DataTypes.DATE,
      periodEnd: DataTypes.DATE,
      skills: DataTypes.STRING
    },
    {
      underscored: false
    }
  );
};
