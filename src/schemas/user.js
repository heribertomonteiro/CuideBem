const mongoose = require('../database/index')

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  
  desc: {
    type: String,
    required: true,
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

  sus: {
    type: String,
    required: true,
  }
})

const User = mongoose.model('User', UserSchema)
module.exports = User