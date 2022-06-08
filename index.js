const express = require('express')
const app = express()
const characterData = require('./onepiececharacters.json')

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("One Piece Characters")
})

app.get('/characters', (req, res) => {
    res.send(characterData)
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})