const db = require('../db');

async function getAllGradeLevel(){
  const [results] = await db.query('SELECT * FROM grade_level');

  return results;
}

module.exports = {
  getAllGradeLevel
}