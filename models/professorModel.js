const db = require('../db');

async function getAllProfessors(){
  const  [results] = await db.query('SELECT * FROM professors');

  return results;
}
module.exports = {
  getAllProfessors
}