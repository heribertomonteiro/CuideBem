const express = require('express')
const User = require('../schemas/user')
const router = express.Router()

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', async (req, res) => {
  try {
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
  res.render('controle', {users: findUsers})
  } catch (erro) {
    return res.status(400).send({erro: 'Find user failed'})
  }
})

router.get('/detalhes/:id', async (req, res) => {
  const findUsers = await User.findById(req.params.id)
  res.render('detalhes', {id: req.params.id, user: findUsers})
})

router.get('/pesquisar/:nome', async (req, res) => {
  
  const findUsers = await User.find({nome: {'$regex' : `${req.params.nome}`, $options: 'i'}})
  res.render('controle', {users: findUsers})
})

module.exports = app => app.use('/', router)