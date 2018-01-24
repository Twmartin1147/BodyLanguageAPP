// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Bodylang = require("../models/bodylang_users.js");


// Routes
// =============================================================
module.exports = function (app) {

    // Get all users
    app.get("/api/bodylang", function (req, res) {

        
        Bodylang.findAll({}).then(function (users) {
            // results are available to us inside the .then
            res.json(users);
        });

    });

    // Add a user
    app.post("/api/bodylang", function (req, res) {

        console.log("Bodylang Data:", req.body);
        
        Bodylang.create({
            
first_name:req.body.first_name,
last_name:req.body.last_name,
email:req.body.email,
user_name:req.body.user_name,
user_password:req.body.user_password,
create_date:req.body.create_date
        }).then(function (BodyLang) {
            // `results` here would be the newly created user
            res.json(BodyLang);
    
        });

    });
};

