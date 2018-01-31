var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bodylangapp_db"
});

connection.connect();

var watsonRes = "Sad";

var query = connection.query("SELECT * FROM useremotions WHERE emotions = " + watsonRes);

query.on("error", function(err) {
  throw err;
});

query.on("fields", function(fields) {
  console.log(fields);
});

query.on("result", function(row) {
  console.log(row.emotions);
});

connection.end();
