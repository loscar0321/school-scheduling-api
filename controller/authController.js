const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

async function registerUser(req, res) {
  const { first_name, last_name, username, password } = req.body;

 
  if (!first_name || !last_name || !username || !password) {
    return res.status(400).json({
      success: false,
      message: 'Invalid Input'
    })
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const results = await userModel.createUser(first_name, last_name, username, hashedPassword);

    return res.status(201).json({
      success: true,
      message: 'User Created',
      data: results.insertId,
      first_name,
      last_name,
      username,
      
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

async function loginUser(req, res){
  const {username, password} = req.body;

  if(!username || !password){
    return res.status(400).json({
      success : false,
      message : 'Username and Password are required'
    })
  }

  try{
    const user = await userModel.getUserByUsername(username);

    if(!user){
      return res.status(401).json({
        success: false,
        message: 'Invalid Username or Password'
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      return res.status(401).json({
        success : false,
        message: 'Invalid Username or Password'
      })
    }
    return res.status(200).json({
      success: true,
      message: 'Login Successful!',
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username
      }
      
    }); 
  } catch (err) {
    console.error('Login Error:', err);
    return res.status(500).json({
      success: false,
      message: 'SERVER ERROR'
    });
  }
}

module.exports = {
  registerUser,
  loginUser
};