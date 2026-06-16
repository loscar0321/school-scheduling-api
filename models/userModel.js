const db = require('../db');

async function createUser(first_name, last_name, username, password){

  const  [results] = await db.query('INSERT INTO users (first_name, last_name, username, password) VALUES (?,?,?,?)', [first_name, last_name, username, password]);

  return results;
}

async function getAllUsers(){
  const [results] = await db.query('SELECT id, first_name, last_name, username FROM users');

  return results;
}

async function  getUser(id) {
  
  const  [results] = await db.query('SELECT first_name, last_name, username FROM users WHERE id =?',[id]);

  return results[0];
  
}

module.exports = {
  createUser,
  getAllUsers,
  getUser
}