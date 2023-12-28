const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const blogModel = require('../models/Blogs');
const { validationResult } = require('express-validator');

router.post('/blogs', async (req, res) => {
  try {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      return res.send(400).json({ error: 'error' });
    } else {
      const { name, email, title, description } = req.body;
      blogModel.create({
        name,
        email,
        title,
        description,
      });
      res.status(200).json({ msg: 'Blog is created' });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
