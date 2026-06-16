const professorModel = require('../models/professorModel');

async function getAllProfessors(req,res){
  try{
    const results = await professorModel.getAllProfessors();

    return res.status(200).json({
      success: true,
      message: 'Professor Retrieved',
      data: results
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'SERVER ERROR'
    })
  }
}module.exports = {
  getAllProfessors
}