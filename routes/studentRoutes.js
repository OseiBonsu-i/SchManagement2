const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.get('/show', (req, res) =>{
    res.render('students/show')
})

router.get('/admission', (req, res) =>{
    res.render('students/admission')
})


module.exports = router