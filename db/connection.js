//use mysql and util, store as a variables
const mysql = require("mysql");

const util = require("util");

//create connection

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employees",
});

//call connection

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;
