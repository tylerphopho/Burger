// Dependencies
const mysql = require("mysql");

if(process.env.JAWSB_URL){
    connection = mysql.createConnection(process.env.JAWSB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: "3305",
        user: "root",
        password: process.env.MYSQL_PASSWORD,
        database: "burgers_db"
    });
}
connection.connection(function(err){
    if(err){
        console.log("err connectiong: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection