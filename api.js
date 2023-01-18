require('dotenv').config()
const path = require('path');
const express = require('express')
const { Scrape } = require('./scrape.js')
const { Nike } = require('./productsites/nike.js')

const app = express()
const port = process.env.PORT || 3000
const products = []
app.get('/', async (req, res) => {
    res.send(await Nike(products))

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