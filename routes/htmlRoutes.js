// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });


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
  app.get("/", function(req, res) {
    res.render("index");
  });

  //Load example page and pass in an example by id
  app.get("/:category", function(req, res) {
    db.items
      .findOne({
        where: {
          itemCategory: req.params.category
        }
      })
      .then(function(result) {
        res.json(result);
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
