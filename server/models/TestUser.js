const mongoose = require('mongoose')

const testuserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String  
})

const testModel = mongoose.model("test-user",testuserSchema)
module.exports = testModel