const express = require("express")
const mongoose = require('mongoose')
const router = express.Router()
const userModel = require('../models/Users')


router.post('/signup', (req, res) => {


    try {
        const { name, email, password } = req.body
        let user=userModel.findOne({email})
        if(!user){
            userModel.create({
                name,
                email,
                password
            })
        }
       
        res.send('user created')

    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router