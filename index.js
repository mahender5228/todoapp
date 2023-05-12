const express = require('express')
const cors=require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { connectdb } = require('./db/db')
const errormiddleware = require('./middlewares/error')
const app = express()
require('dotenv').config()
const port = process.env.port
connectdb()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw())
app.use(cookieParser())
const corsOptions = ({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'UPDATE', 'DELETE'],
    credentials: true
  });
  
app.use(cors(corsOptions));
const userroutes = require('./routes/users')
const task = require('./routes/task')
app.use('/user', userroutes)
app.use('/task', task)
app.use(errormiddleware)


app.listen(port, () => {
    console.log(`api is runiing on ${port} `)
}
)
