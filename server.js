// Dependencies
// ===========================================================
var express = require("express");
var db = require("./db/db.json");
var path = require("path");

var app = express();
var PORT = 3000;


// Routes
// ===========================================================
require("./routes/htmlroutes")(app)


// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });