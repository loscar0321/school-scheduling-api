const db = require('../db');

async function getGradeLevel(){
  const [results] = await db.query('SELECT * FROM grade_level');

  return results;
}

module.exports = {
  getGradeLevel
}