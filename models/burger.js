// Inside your burger directory, create a folder named models.
// In models, make a burger.js file.
// Inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.


var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(valOfCol, valOfOtherCol, cb) {
		orm.insertOne("burgers", valOfCol, valOfOtherCol, function(res) {
			cb(res);
		});
	},
	updateOne: function(columnInput, condition, cb) {
		orm.updateOne("burgers", columnInput, condition, function(res) {
			cb(res);
		});
	}
};

  

module.exports = burger;