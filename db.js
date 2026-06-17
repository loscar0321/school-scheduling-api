const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'school_sched'
});

db.getConnection((err) => {
  if (err) {
    console.error('DB CONNECTION ERROR:', err.message);
    return;
  }
  console.log('MYSQL Connected');
  connection.release();
});

module.exports = db.promise();