const express = require('express')
const dotenv = require('dotenv')

const todos = require('./routes/todos')

dotenv.config({ path: './config/config.env'})

const app = express()
const PORT = process.env.PORT

app.use('/api/v1/todos', todos)

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on PORT:${PORT}`))