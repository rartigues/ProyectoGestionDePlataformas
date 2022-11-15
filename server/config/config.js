require('dotenv').config()

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "database_development",
        host: process.env.DB_ENDPOINT,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        "define": {
            "freezeTableName": true,
        },
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_ENDPOINT,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        "define": {
            "freezeTableName": true,
        },
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_ENDPOINT,
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
}