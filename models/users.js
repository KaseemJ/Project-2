module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING
  });
  return users;
};
 