var mysql=require("mysql");

var con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err){
    if (err) throw err;
    else console.log("connected");
});

exports.con=con;