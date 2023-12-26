const express = require("express")
const mongoose = require('mongoose')
const router = express.Router()
const userModel = require('../models/Users')
const {body, validationResult}=require('express-validator')

router.post('/signup', (req, res) => {


    try {
        let error=validationResult(req)
        if(!error.isEmpty()){
            return res.send(400).json({error:"error"})
        }
        else
      {  const { name, email, password } = req.body
            userModel.create({
                name,
                email,
                password
            })
     
        res.send('user created')}

    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router