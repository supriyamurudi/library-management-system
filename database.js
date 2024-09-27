const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sneha', // Your XAMPP MySQL root username
  password: '', // Your XAMPP MySQL root password
  database: 'project',
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the library database!');
});

module.exports = connection;