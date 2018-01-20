var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(process.cwd() + "/public"));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

var routes = require("./controllers/controller.js");
app.use("/", routes);

app.listen(PORT);
