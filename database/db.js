const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '103.21.58.231',
    port: 3306,
    user: 'adhocvhs_adhocintern',
    password: 'adhocvhs_adhocintern', 
    database: 'adhocvhs_nodedb'
});   
 
// const connection = mysql.createConnection({
//     host: "localhost",
//     port: "3306",
//     user: "root",  
//     password: "Msd@007,", 
//     database: "adhocvhs_nodedb"
//   });

connection.connect(function (error) {
    if (error) {
        console.error('Error connecting to MySQL:', error);
    } else {
        console.log('Database connected');
    }
});

module.exports = connection;
