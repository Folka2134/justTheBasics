const express = require('express')
const dotenv = require('dotenv')

const connectDB = require('./config/db')

// Bring in config
dotenv.config({ path: './config/config.env'})

// Initialize app with express
const app = express()
const PORT = process.env.PORT

// Connect to database
connectDB()

// Bring in todo routes
const todos = require('./routes/todos')
// use todo routes on this dir
app.use('/api/v1/todos', todos)

// Listen for changes
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on PORT:${PORT}`))