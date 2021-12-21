const express = require('express')
const sequelize = require('./db/conexion')
let app = express()
require("dotenv").config()
const booksView = require('./view/book')

app.use(express.json())

const serverStart = async() => {
    try{
    //await sequelize.authenticate()
    console.log('Correct SQL authentication')

    app.listen(process.env.PORT, () => {
        console.log(`Server start in: http://${process.env.HOST}:${process.env.PORT}`)
    }) 
    }catch(error){
        console.error('SQL conection error: ' + error)
    }
}


serverStart()
//views
booksView(app)