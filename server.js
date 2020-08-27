var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3305;
var app = express();

var burgerController = require("./controllers/burgers_controller.js");
var burger = require("./models/burger.js");



app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));


var expresshandlebars = require("express-handlebars");


app.engine("handlebars", expresshandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var burgerObject = {
        burgers: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });


app.use("/api/burgers", burgerController);

app.listen(PORT);