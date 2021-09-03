/* fisrt init */
require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const serverInit = require('./modules/server-init')
const port = process.env.PORT

/* view init */
app.set('view engine', 'ejs')
app.set('views', './views')
app.locals.pretty = true

/* middlewares init */
app.use(express.json())
app.use(express.urlencoded({extended: false}))


/* router init */




/* error init */
const notFoundError = require('./modules/')





/* server init */
app.listen(port, serverInit(app, port))