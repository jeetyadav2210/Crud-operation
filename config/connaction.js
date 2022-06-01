var mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    user: 'root', // sql user
    password: 'shivani', //sql user password
    host: 'localhost', // if it does not work try- localhost
    database: 'JEET',
    // multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});
module.exports = mysqlConnection;