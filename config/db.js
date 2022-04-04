require('dotenv').config()
const mysql = require('mysql2')

const connect = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,

})
console.log('Database connected')



module.exports = connect