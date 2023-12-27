const express = require("express")
const mongoose = require('mongoose')
const router = express.Router()
const userModel = require('../models/Users')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

router.post('/signup', async (req, res) => {

    const salt = await bcrypt.genSalt(10)
    let secPassword = await bcrypt.hash(req.body.password, salt)
    try {
        let error = validationResult(req)
        if (!error.isEmpty()) {
            return res.send(400).json({ error: "error" })
        }
        else {
            const { name, email } = req.body
            
            let emailExist = await userModel.findOne({ email })
            if (emailExist) {
                res.status(400).json({ msg: "Email already exists" })
            }
            else {
                userModel.create({
                    name,
                    email,
                    password: secPassword
                })

                res.send('user created')
            }
        }

    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router