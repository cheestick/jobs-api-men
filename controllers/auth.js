const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  const user = await User.create({ ...req.body })

  const { _id: userId, name } = user

  const token = jwt.sign({ userId, name }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })

  res.status(StatusCodes.CREATED).json({ user: { name }, token })
}

const login = async (req, res) => {
  res.send('login user')
}

module.exports = {
  register,
  login,
}
