// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var bodyLang = require("./routes/body-lang-api-routes");
// Bring in the models
var db = require("./models/");
// Sets up the Express App
// =============================================================
var app = express();


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("app/public"));
app.use("/", bodyLang);

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");



// Routes
// =============================================================
// require("./routes/emotions-api-routes.js")(app);
var routes = require("./controllers/bodylang_app_controller");

app.use("/getemotions", routes);
// app.use("/update", routes);
// app.use("/create", routes);
// Starts the server to begin listening
// =============================================================
var PORT = process.env.PORT || 8080;
db.sequelize.sync().then(function() {
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
});
