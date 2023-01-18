require('dotenv').config()
const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 3000
app.get('/', async (req, res) => {

    res.send('Hello World')

})
app.listen(port, () => {
    console.log(`ready on http://localhost:${port}`)
})

module.exports = app 


/* 

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));

}) 
 */