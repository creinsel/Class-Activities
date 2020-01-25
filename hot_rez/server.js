// Dependencies
// =============================================================
var express = require("express");
// var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT||3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Required Routes
// =============================================================
// app.get("/", function(req, res) {
//    res.send("What is res.send?");
//   });

//   app.get("/cassie", function(req, res) {
//     res.send("<h1>cassie</h1>");
//    });
require("./routes/api")(app);
require("./routes/html")(app);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  