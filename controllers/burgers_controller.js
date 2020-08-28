var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var handlebarsObject = {
			burgers: data
		};
		res.render("index", handlebarsObject);
	});
});

router.post("/", function(req, res) {
	console.log(req.body.burger_name);
	if(req.body.burger_name !== "") {
		burger.insertOne(req.body.burger_name.trim(), function() {
			res.redirect("/");
		});
	}
});

router.put("/:id", function(req, res) {
	console.log(req.params.id);

	burger.updateOne(req.params.id, function() {
		res.redirect("/");
	});
})


module.exports = router;