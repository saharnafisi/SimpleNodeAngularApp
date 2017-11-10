var express = require('express');
var connection = require('../db/connection');

var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.post('/add-user', function (req, res) {
  var fname = req.body.first_name;
  var lname = req.body.last_name;
  var email = req.body.email;
  var password = req.body.password;
  console.log(typeof fname);
  console.log(typeof lname);
  console.log(typeof email);
  console.log(typeof password);
  console.log(fname);
  console.log(lname);
  console.log(email);
  console.log(password);
  var user = {
    first_name: fname,
    last_name: lname,
    email: email,
    password: password
  };
  var con = connection.con;
  //var sql = "INSERT INTO user (fname,lname,email,password) VALUES ('sss','nnn','nnnn@','123')";
  con.query('INSERT INTO user (fname,lname,email,password) VALUES (?,?,?,?)',
  [fname,lname,email,password],function(err,result){
    if (err) throw err;
    else{
      console.log("1 record added");
    }
  });
  res.json(user);
  res.end();
});

router.get('/show-user',function(req,res){
  console.log("salaaam");
  var con=connection.con;  
  var sql='SELECT * FROM user';
  con.query(sql,function(err,result,fields){
    if (err) throw err;
    console.log(result);
    res.json(result);
  }); 
});

module.exports = router;
