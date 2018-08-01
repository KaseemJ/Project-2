// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function (app) {
  // Load index page
  app.get("/home",isAuthenticated, function (req, res) {
    db.items.findAll({ limit: 20 }).then(function (result) {
      res.render("content");
    });
  });

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
 app.get("/login", function (req, res) {
    console.log("here")
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Load example page and pass in an example by id
  app.get("/api/:category", function (req, res) {
    db.items.findAll({ where: { item_category: req.params.category } })
      .then(function (result) {
        res.json(result);
      });
  });
   app.get("/myaccount/:userId/post", function(req,res){
      console.log(req.params.userId)
      res.render("post")
    })
 
  app.get("/myaccount/:user_id", function (req, res) {
    console.log(req.params.user_id)
    db.User.findOne({
      include: [db.items],
      where: {
        id: req.params.user_id
      }
    }).then(function (result) {
      console.log(result.items)
      res.render("user", { user: result });
    });

 
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page

  // content or search page

  //Load example page and pass in an example by id

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
})};
