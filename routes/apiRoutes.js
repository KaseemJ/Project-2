var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/item", function(req, res) {
    db.items.create(req.body).then(function(result) {
      res.json(result);
      console.log(result);

    });
  });

  app.post("/api/users", function(req,res){
    db.users.create(req.body).then(function(result){
      res.json(result)
      console.log(result)
    })
  })

  // Delete an example by id
  app.delete("/items/:item_id", function(req, res) {
    db.items.destroy({ where: { item_id: req.params.item_id } }).then(function(result) {
      res.json(result);
    });
  });
};
