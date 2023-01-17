const { Nike } = require('./productsites/nike.js');
const express = require('express')

/* 
const { FootLocker } = require('./productsites/footlocker.js');
const { Champs } = require('./productsites/champs.js');
const { Jdsports } = require('./productsites/jdsports.js');
const { Finishline } = require('./productsites/finishline.js');  
const path = require('path');
*/

const productResults = []
const app = express()
const port = process.env.PORT || 3000
/* 
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));

}) 
*/

app.get('/', async (req, res) => {
    productResults.push(await Nike())
        productResults.push(await FootLocker())
        productResults.push(await Champs())
        productResults.push(await Jdsports())
        productResults.push(await Finishline())
    res.json(productResults)

})
app.listen(port, () => {
    console.log(`ready on http://localhost:${port}`)
})
module.exports = app