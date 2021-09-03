require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()

require('./modules/server-init')(app, process.env.PORT)

const memberRouter = require('./routes/member')
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
const payRouter = require('./routes/pay')
const mypageRouter = require('./routes/mypage')
app.use('/member', memberRouter)