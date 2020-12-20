const mysql = require('mysql');
const db = mysql.createConnection({
    host: "us-cdbr-east-02.cleardb.com",
    user: "bbcb0c824a3386",
    password:"a921fcf7",
    database: "mxer",


})
module.exports = db;