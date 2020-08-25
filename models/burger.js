// Inside your burger directory, create a folder named models.
// In models, make a burger.js file.
// Inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.


var orm = require("../config/orm.js");

var burger = {
	selectAll: function(callback){
		orm.selectAll("burgers", function(result){
			callback(result);
		});
	},

	insertOne: function(column, callback){
		orm.insertOne("burgers", column, function(result){
			callback(result);
		});
	},

	updateOne: function(columnValue, condition, callback){
		orm.updateOne("burgers", columnValue, condition, function(result){
			callback(result);
		});
	},

	deleteOne: function(condition, callback) {
		orm.deleteOne("burgers", condition, function(result){
			callback(result);
		});
	}
};

module.exports = burger;