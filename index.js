const { chromium } = require("playwright-chromium");

/*  const { Nike } = require('./productsites/nike.js'); */

/* 
const { FootLocker } = require('./productsites/footlocker.js');
const { Champs } = require('./productsites/champs.js');
const { Jdsports } = require('./productsites/jdsports.js');
const { Finishline } = require('./productsites/finishline.js');  
*/

(async () => {
    const browser = await chromium.launch({ chromiumSandbox: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://whatsmyuseragent.org/');
    await page.screenshot({ path: `chromium.png` });
    await browser.close();
  })().catch(error => { console.error("Something bad happend...", error); });;
//const productResults = []
/* const path = require('path'); */
/* const express = require('express')
const app = express()
const port = process.env.PORT || 3000 */

// creates a server to host the data at localhost:port
/* app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));

}) */
/*
app.get('/', async (req, res) => {

    productResults.push(await Nike())
     productResults.push(await FootLocker())
    productResults.push(await Champs())
    productResults.push(await Jdsports())
    productResults.push(await Finishline()) 
    res.json(productResults)

}) 
*/

/* app.listen(port, () => {
    console.log(`ready on http://localhost:${port}`)
})



module.exports = app */