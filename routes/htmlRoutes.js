var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/home", function (req, res) {
    db.items.findAll({ limit: 20 }).then(function (result) {
      res.json(result);
    });
  });

  // Load example page and pass in an example by id
  app.get("/:category", function (req, res) {
    db.items.findOne({ where: { item_category: req.params.category } })
      .then(function (result) {
        res.json(result);
      });
  });

  app.get("/myaccount/:user_id", function (req, res) {
    console.log(req.params.user_id)
    db.users.findOne({
      include: [db.items],
      where: {
        id: req.params.user_id
      }
    }).then(function (result) {
      res.render("user", { user: result });
    });
  });

  app.get("/myaccount/:user_id/update/:item_id", function(req,res){
    db.items.findOne({where: {item_id: req.params.item_id}}).then(function(result){
      console.log(result)
      res.render("update", {item: result})
    })
  })
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
