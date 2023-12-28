const express = require("express")
const mongoose = require('mongoose')
const router = express.Router()
const userModel = require('../models/Users')
const loginModel=require('../models/Login')
const jwt = require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const {body, validationResult}=require('express-validator')

router.post('/login', async (req, res) => {
    let email = req.body.email

    try {
        // let error=validationResult(req)
       

        let userExists = await userModel.findOne({ email })

        if (!userExists) {
            return res.status(400).json({ msg: 'email not found' })

        }
        let pwdCompare= await bcrypt.compare(req.body.password, userExists.password)
        if (!pwdCompare) {
            return res.status(400).json({ msg: 'incorrect password' })
        }

        const payload={
            user:{
                id:userExists.id
            }
        }
        const jwtSecret="qwertyuiopasdfghjkl"
        const authToken=jwt.sign(payload, jwtSecret)
       
        return  res.status(200).json({success:true, authToken:authToken})
        
       

    } catch (err) {
        console.log(err)

    }
})

module.exports = router