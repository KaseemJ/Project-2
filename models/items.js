module.exports = function(sequelize, DataTypes) {
    var items = sequelize.define("items", {
      item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: DataTypes.INTEGER,
      item_name: DataTypes.STRING,
      item_price: DataTypes.DECIMAL(10,2),
      item_description: DataTypes.TEXT,
      item_location: DataTypes.STRING,
      item_img_url: DataTypes.TEXT,
      item_category: DataTypes.STRING
    });
    return items;
  };
  