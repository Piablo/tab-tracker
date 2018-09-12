const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models')
const config = require('./config/config')
//const mysql = require('mysql');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app)

// console.log("does this run");

// var connection = mysql.createConnection({
//     host:'localhost',
//     user: 'root',
//     password: '',
//     database: 'articles'
// });

// connection.connect();

// var article = {
//     author: 'Paul Buys',
//     title: 'Node tut',
//     body: 'foo bar'
// }

// var query = connection.query('SELECT * FROM articles', article, function (err, result) {
//     if(err) {
//         console.error(err);
//         return;
//     }
//     console.log("where does this get logged");
//     console.error(result);
// })

// console.log("and this guy?");

sequelize.sync()
    .then(() => {
        app.listen(config.port);
        console.log(`Server started on port ${config.port}`)
    })

