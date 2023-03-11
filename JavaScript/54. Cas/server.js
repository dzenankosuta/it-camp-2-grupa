const express = require('express')
const app = express()
const PORT = 4000;

const { getUsers, addUser } = require('./controllers')

app.use(express.json())

app.get('/', getUsers)

app.post('/', addUser)

app.listen(PORT || 3000, () => {
    console.log("Hello");
})