const express = require('express')
const User = require('../schemas/user')
const router = express.Router()

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', async (req, res) => {
  try {
    console.log('a')
    console.log(req.body)
    const users = await User.create(req.body)
    console.log(users)
    return res.send({users})
  } catch (error) {
    return res.status(400).send({error: 'Registration failed'})
  }
})

router.get('/users', async (req, res) => {
  try{
  const findUsers = await User.find()
  return res.send(findUsers)
  } catch (erro) {
    return res.status(400).send({erro: 'Find user failed'})
  }
})

module.exports = app => app.use('/', router)