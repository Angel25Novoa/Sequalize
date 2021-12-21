const bookModel = require('../model/book')

module.exports.listBooks= async() => {
    let result = await bookModel.list()
    return result
}