const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
    )
    
    fs
    .readdirSync(__dirname)
    .filter((file) =>
    file !== 'Index.js'
    )
    .forEach((file) => {
        console.log("william");
        console.log(__dirname)
        console.log(file);
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })
    
    db.sequelize = sequelize
    db.Sequelize = Sequelize
    
    module.exports = db;