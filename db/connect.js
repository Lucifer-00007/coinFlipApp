const mysql = require('mysql');

// Create the MySQL connection pool
var pool_con = mysql.createPool({
    connectionLimit : 100,
    host : "localhost",
    user : "coin",
    password : "Root#12345",
    database : "coinBase",
});
   
pool_con.getConnection(function(err) {
    if(!err){
        console.log("Database connection successful!");
        // return true;
    }else{
        console.log("Database connection failed!");
        // return false;
    }
})

// Export the pool for use in other parts of your application
module.exports = pool_con;
