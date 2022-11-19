require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const port = 5000

const dbConnect = require('./config/DbConnect')

const userRoutes = require('./routes/userRoutes')

app.use(express.json())
app.use(cors());

app.use('/api/users',userRoutes)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!\nhttp://localhost:${port}`))