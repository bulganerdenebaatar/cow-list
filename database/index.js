const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: 'student',
  database: 'cowcowcow'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!
function GetCows(callback) {
  connection.query('select * from cows',(err, cows) => {
    if (err) {
      callback(err)
    } else {
      callback(null, cows)
    }
  })
};


function PostCows(cowInfo, callback) {
  console.log('cowinfo',cowInfo)
  connection.query('insert into cows (name, description) values ( ? , ? )', [ cowInfo.name, cowInfo.description ], (err, result) => {
    if (err) {
      callback(err)
    } else {
      console.log('result',result)
      callback(null, result)
    }
  })
};

// Don't forget to export your functions!
module.exports = {
  GetCows, PostCows
};
