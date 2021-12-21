const bookController = require('../controller/book')

module.exports = (app) => {
    app.get('/books', (req, res) => {
        res.json({message: "Holis"})
    })

    app.post('/books', (req, res) => {
        let book = req.body
        console.log(book)
        res.json(book)
    })
}