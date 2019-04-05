const connection = require("../config/connection.js");

const orm = {

    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (table, val, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (burger_name, devoured) VALUES (";
        queryString += val.toString();
        queryString += ", false)";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (table, burg, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET devoured = ";
        queryString += true;
        queryString += " WHERE burger_name = ";
        queryString += burg.toString();

        console.log(queryString);

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};



module.exports = orm;