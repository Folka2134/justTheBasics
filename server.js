const express = require('express')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env'})

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => res.send('testtest'))

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on PORT:${PORT}`))