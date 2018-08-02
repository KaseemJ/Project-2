var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      user_name: req.body.user_name,
      phone_number: req.body.phone_number
    }).then(function () {
      res.redirect(307, "/api/]login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        id: req.user.id,
        email: req.user.email,
        user_name: req.user.user_name,
        phone_number: req.user.phone_number
      });
    }
  });


app.put("/items/:item_id", function(req, res){
  console.log(req.body)
  db.items.findOne({where: {item_id: req.params.item_id}}).then(function(item){
    console.log(item.dataValues.in_cart)
    if(item.dataValues.in_cart){
      console.log("Item is reserved")
      res.send("Item is reserved")
    }else{
  
   db.items.update(req.body,{where: {item_id: req.params.item_id}}).then(function(result){

   res.end()
  })
 }
})
})
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/item", function (req, res) {
    db.items.create(req.body).then(function (result) {
      res.json(result);
      console.log(result);
    });
  });

  app.put("/myaccount/:user_id/update/:item_id", function(req,res){
    db.items.update(req.body, {where: {item_id:req.params.item_id}}).then(function(result){
      res.json(result)
    })
  })

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
  app.post("/myaccount/:userId/post", function(req,res){
    db.items.create(req.body).then(function(result){
      console.log(result)
      res.json(result)
    })
  })
};
