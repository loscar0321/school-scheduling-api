const userModel = require('../models/userModel');

async function getAllUsers(req, res) {
  try {
    const results = await userModel.getAllUsers();

    return res.status(200).json({
      success: true,
      message: 'All Users Retrieved',
      data: results
    })
  } catch (err) {
    console.log('Error Found', err);
    return res.status(500).json({
      success: false,
      message: 'SERVER ERROR'
    })
  }
}

async function getUserById(req, res) {
  const id = Number(req.params.id);

  if (isNaN(id) || id <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Invalid Input'
    })
  }

  try {
    const results = await userModel.getUserById(id);

    if (!results) {
      return res.status(404).json({
        success: false,
        message: 'User Not Found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'USER FOUND',
      data: results
    })
  } catch (err) {
    console.log('ERROR FOUND', err);
    return res.status(500).json({
      success: false,
      message: 'SERVER ERROR'
    })
  }
}

module.exports = {
  getAllUsers,
  getUserById
}