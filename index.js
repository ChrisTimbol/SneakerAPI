const { chromium } = require('playwright');
const { Nike } = require('./productsites/nike.js');
const { FootLocker } = require('./productsites/footlocker.js');
const { Champs } = require('./productsites/champs.js');
const { Jdsports } = require('./productsites/jdsports.js');
const { Finishline } = require('./productsites/finishline.js'); 


const productResults = []
const path = require('path');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// creates a server to host the data at localhost:port
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));

})

app.get('/api', async (req, res) => {

    const products = [] // stores all product cards
    productResults.push(await Nike())
    productResults.push(await FootLocker())
    productResults.push(await Champs())
    productResults.push(await Jdsports())
    productResults.push(await Finishline())
    res.send(productResults)

})

app.listen(port, () => {
    console.log(`ready on http://localhost:${port}`)
})


// export the express api
module.exports = app