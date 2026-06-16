const gradeLevelModel = require('../models/gradeLevelModel');

async function getGradeLevel(req,res){
  try{
    const results = await gradeLevelModel.getGradeLevel();

    return res.status(200).json({
      success : true, 
      message : 'Grade Level Retrieved',
      data : results
    })
  }catch(err){
    return res.status(500).json({
      success : false,
      message : 'SERVER ERROR'
    })
  }
}
module.exports = {
  getGradeLevel
}