const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jagdish'
})

connection.connect((err) => {
    if (err) {
        console.log(err.sqlMessage)
    }
    console.log('Database is connected')
})

module.exports = { connection }