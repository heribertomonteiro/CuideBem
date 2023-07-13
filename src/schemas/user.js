const mongoose = require('../database/index')

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  data: {
    type: Date,
    required: true,
  },

  cpf: {
    type: String,
    required: true,
  },

  tel: {
    type: String,
    required: true,
  },

  senha: {
    type: String,
    required: true,
    select: false,
  }
})

const User = mongoose.model('User', UserSchema)
module.exports = User