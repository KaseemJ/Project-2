var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/home", function(req, res) {
    db.items.findAll({ limit: 20 }).then(function(result) {
      res.json(result);
    });
  });
  // content or search page
  app.get("/content", function(req, res) {
    res.render("content");
  });

  // Load example page and pass in an example by id
  // app.get("/:category", function(req, res) {
  //   db.items.findOne({ where: { itemCategory: req.params.category } }).then(function (result) {
  //     res.json(result);
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
