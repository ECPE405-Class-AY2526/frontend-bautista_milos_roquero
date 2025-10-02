const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const testModel = require('./models/TestUser')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/test-user")

app.post('/signup',(req,res)=>{
    testModel.create(req.body)
    .then(testUser => res.json(testUser))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {email,password} = req.body;
    testModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("Invalid Password")
            }
        }
        else{
            res.json("No record existed")
        }
    })
})

app.listen(3001, () => {
    console.log("server is running")
})