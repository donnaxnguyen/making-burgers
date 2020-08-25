// Create an orm.js file inside config directory.
// Import (require) connection.js into orm.js
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.


// requiring connection
var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableInput, callback){
		var queryString = "SELECT * FROM " + tableInput + ";";
		console.log(queryString);
		connection.query(queryString, function(error, result){
			if (error) throw error;
			callback(result);
		});
	},

	insertOne: function(tableInput, column, callback){
		var name = column.toString();
		console.log(name);
		var queryString = "INSERT INTO " + tableInput + "(burger_name, devoured) VALUES ( '" + name + "', false);"
		console.log(queryString);
		connection.query(queryString, function(error, result){
			if (error) throw error;
			callback(result);
		});
	},

	updateOne: function(tableInput, columnValue, condition, callback){
		var queryString = "UPDATE " + tableInput;
		queryString += ' SET devoured = true';
		queryString += ' WHERE ';
		queryString += condition;
		console.log(queryString);
		connection.query(queryString, function(error, result){
			if (error) throw error;
			callback(result);
		});
	},

	deleteOne: function(tableInput, condition, callback) {
    var queryString = "DELETE FROM " + tableInput;
    queryString += " WHERE ";
    queryString += condition;
    connection.query(queryString, function(error, result) {
      		if (error) throw error;
			callback(result);
    });
  }
};

module.exports = orm;