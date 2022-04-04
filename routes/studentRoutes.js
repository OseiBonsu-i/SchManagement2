const express = require('express')
const router = express.Router()
// const mysql = require('mysql2')
const db = require('../config/db')
// const pool = require('../config/db')
// const studentControllers = require('../controllers/studentControllers')

router.get('/show', (req, res) =>{
    res.render('students/show')
})

router.get('/admission', (req, res) =>{
    res.render('students/admission')
})

// router.post('/', async (req, res) => {
//     try {
//         let firstname = req.body.firstname
//         let lastname = req.body.lastname
//         let age = req.body.age
//         let sql = `INSERT INTO students(firstname, lastname, age) VALUES('${firstname}', '${lastname}', '${age}')`
//         db.query(sql, function (err, result) {
//             if (err) throw err
//             console.log('record inserted')
//             res.redirect('/')
    
//         })
        
//     } catch (err) {
//         res.send(err)
//     }




// })

// router.route('/:id').get(studentControllers.getstudentById)


module.exports = router