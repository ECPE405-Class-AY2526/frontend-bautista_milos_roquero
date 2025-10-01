const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const testuserSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'Please enter a Full Name']
  },
 email:{
  type:String,
  required:[true,'Please enter an email'],
  unique:true,
  lowercase: true,
  validate:[isEmail,'Please enter a valid email']
 },
password:{
  type:String,
  required:[true,'Please enter a password'],
  minlength:[7,'Minimum Password lenght is 7 characters']
 },
})

testuserSchema.pre('save',async function(next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const testModel = mongoose.model("test-user",testuserSchema)
module.exports = testModel