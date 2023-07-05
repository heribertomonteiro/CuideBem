const express = require('express')
const app = express()

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(express.json())

require('./controller/authController')(app)
app.listen(3000)