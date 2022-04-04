require('dotenv').config()

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3030

const indexRouter = require('./routes/index')
const studentRouter = require('./routes/studentRoutes')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layouts')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.json())

// app.use('/students', require('./routes/studentRoutes'))


app.use((err, req, res, next) => {
    console.log(err.stack)
    console.log(err.name)
    console.log(err.code)

    res.status(500).json({
        message: 'Something went wrong',
    })
})

app.use('/', indexRouter)
app.use('/students', studentRouter)

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))


