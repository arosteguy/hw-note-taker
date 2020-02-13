var express = require("express");
var path = require("path");
var fs = require("fs");
var htmlRoutes = require("./routes/htmlRoutes");
var apiRoutes = require("./routes/apiRoutes");

var app = express();
// middleware
// parses req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// serves up static public folder
app.use(express.static("public"))

var PORT = process.env.PORT || 3000;

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



app.listen (PORT, function() {
    console.log("App listening on PORT" + PORT);
});