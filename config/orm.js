// Create an orm.js file inside config directory.
// Import (require) connection.js into orm.js
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

var connection = require("./connection.js");

var orm = {
	selectAll: function(tableInput, callback) {
		var queryString = "SELECT * from ??";
		connection.query(queryString, [tableInput], function(err, res) {
			if (err) {
				throw err;
			}
			callback(res);
		});
	},
	insertOne: function(tableInput, columnName, burgerName, callback) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [tableInput, columnName, burgerName], function(err, res) {
			if (err) {
				throw err;
			}
			callback(res);
		});
	},
	updateOne: function(tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal, callback) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, [tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal], function(err, res) {
			if (err) {
				throw err;
			}
			callback(res);
		});
	}
};

// Export ORM
module.exports = orm;