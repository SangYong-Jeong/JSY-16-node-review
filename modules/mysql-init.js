const mysql = require('mysql2')
const pool = require('mysql2/typings/mysql/lib/Pool')
mysql.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
})

module.exports = { pool }