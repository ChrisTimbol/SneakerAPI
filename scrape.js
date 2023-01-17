const { Nike } = require('./productsites/nike.js')
const { FootLocker } = require('./productsites/footlocker.js')
const { Champs } = require('./productsites/champs.js')
const { Jdsports } = require('./productsites/jdsports.js')
const { Finishline } = require('./productsites/finishline.js');


(async () => {
    const productResults = []

    productResults.push(await Nike())
    productResults.push(await FootLocker())
    productResults.push(await Champs())
    productResults.push(await Jdsports())
    productResults.push(await Finishline())
    console.log(productResults)
})()

// scrape data
// send to database
// index.js will pull from database , maybe mongodb is all needed?