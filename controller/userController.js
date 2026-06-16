const userModel = require('../models/userModel');

async function createUser(req, res) {
  const { first_name, last_name, username, password } = req.body;

  if (!first_name || !last_name || !username || !password) {
    return res.status(400).json({
      success: false,
      message: 'Invalid Input'
    })
  }

  try {
    const results = await userModel.createUser(first_name, last_name, username, password);

    return res.status(201).json({
      success: true,
      message: 'User Created',
      data: results.insertId,
      first_name,
      last_name,
      username,
      password
    })
  }
  catch (err) {
    console.log('Controller Error', err);
    return res.status(500).json({
      success: false,
      message: 'SERVER ERROR'
    })
  }
}

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

async function getUser(req, res) {
  const id = Number(req.params.id);

  if (isNaN(id) || id <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Invalid Input'
    })
  }

  try {
    const results = await userModel.getUser(id);

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
  createUser,
  getAllUsers,
  getUser
}