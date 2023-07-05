const mongoose = require('../database/index')

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },

  data: {
    type: Date,
    require: true,
  },

  cpf: {
    type: String,
    require: true,
  },

  tel: {
    type: String,
    require: true,
  },

  senha: {
    type: String,
    require: true,
    select: false,
  }
})

const User = mongoose.model('User', UserSchema)
module.exports = User