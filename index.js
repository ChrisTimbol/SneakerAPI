const { chromium } = require('playwright');
const { Nike } = require('./productsites/nike.js');
const { FootLocker } = require('./productsites/footlocker.js');
const { Champs } = require('./productsites/champs.js');
const productResults = []

const express = require('express')
const app = express()
const port = 3000
// creates a server to host the data at localhost:port
app.get('/', async (req, res) => {
    productResults.push(await Nike())  // go to nike page and scrape release product
    productResults.push(await FootLocker()) // go to footlocker page and scrape release product
    productResults.push(await Champs())
    res.send(productResults) 
})

app.listen(port, () => {
    console.log(`ready on http://localhost:${port}`)
})


// next site is jd sports
// champs
// finishline
