var mysql = require('mysql') ;
var con = mysql.createConnection({
    host: "localhost" ,
    user: "root" ,
    password: "" ,
    database: "numer"
}) ;
con.connect(function(err){
    if(err)throw err;
    console.log("connect!") ;
    fx = 'x+2-1' ;
    sql="insert into bisection (input) values (?)" ;
    con.query(sql,fx, function(err,result) {
        if(err) throw err ;
        console.log("insert ok !");
    })
}) ;