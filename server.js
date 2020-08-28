var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var burgerController = require("./controllers/burgers_controller.js");


var PORT = process.env.PORT || 3305;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

var expresshandlebars = require("express-handlebars");

app.engine("handlebars", expresshandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", burgerController);

app.listen(PORT);