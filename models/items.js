var models

module.exports = function (sequelize, DataTypes) {
  var items = sequelize.define("items", {
    item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    item_name: DataTypes.STRING,
    item_price: DataTypes.DECIMAL(10, 2),
    item_description: DataTypes.TEXT,
    item_location: DataTypes.STRING,
    item_img_url: DataTypes.TEXT,
    item_category: DataTypes.STRING
  });
  

  items.asscociate = function (models) {
    models.items.belongsTo(models.users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  }
  return items;

};

