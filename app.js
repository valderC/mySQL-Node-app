//this is variable which you can call whatever you want however the require part is necessary to allow it to Work
//similar to when calling a package in java like the scanner object
let mysql = require('mysql');
let faker = require('faker');

//we need to establish the connection with our db, it can be done w/ the snippet below:
//I'M OK with using localhost for the host since im running mysql on the same maching as my server
let connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : ''
});

// let q = 'SELECT 1 + 1 AS solution';
// let q = 'SELECT CURDATE() AS solution';     results[0].solution);
// let q = 'SELECT CURTIME() AS time, CURDATE() AS date, NOW() AS now';

//how to insert value using mysql package to our database!
// let b = 'INSERT INTO users (email) VALUES("nike44charger@gmail.com")';

// connection.query(b, function(error, results, fields) {
//   if (error) throw error;
// });

// let q = 'SELECT * FROM users';
// connection.query(q, function(error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// let data = [];
// for (let i =0; i < 500; i++){
// data.push([faker.internet.email(), faker.date.past()]);
// }
//
// let a = 'INSERT INTO users (email, created_at) VALUES ?';
// connection.query(a, [data], function(err, results){
//     if (err) throw err;
//     console.log(results);
// })


//js object key/value pair
let person = {email: faker.internet.email(),
              created_at: faker.date.past()};

connection.query('INSERT INTO users SET ?', person, function(error, results) {
 if (error) throw error;
 console.log(results);
});

//simplier version- connection.end();

// connection.end(function(err){
//   //the connection is terminated now
// });

connection.end(function(error){
  if (error) throw error;
  console.log('session ended');
});

//  //connection.connect(); INSTEAD BELOW
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
