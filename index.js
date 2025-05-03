const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const userRoute = require('./routes/user_route')

mongoose.connect('mongodb+srv://admin:safwanelesinge@cluster0.jau0i.mongodb.net/gsb')
const db = mongoose.connection;
db.on('error', (err) => { console.log('Error connecting to MongoDB', err) })
db.on('open', () => { console.log('Connected to MongoDB')})

app.use(express.json())
app.use('/users', userRoute)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});