require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb')
const { Nike } = require('./productsites/nike.js')
const { Finishline } = require('./productsites/finishline.js');
const { FootLocker } = require('./productsites/footlocker.js')
const { Champs } = require('./productsites/champs.js')
const { Jdsports } = require('./productsites/jdsports.js')


// pass client to other files
// inside files set productcard'key' value to update
// sleep
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sneaker.1nvjvbv.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri);
const products = []; // contains scrape data

// Scrapes product sites
async function Scrape(){
    try {
        await Nike(products)
        await Finishline(products)
    /*  
        await FootLocker(products) 
        await Champs(products)
        await Jdsports(products)
    */
    } catch(err){
        console.log(err)
    }
    return products
}

module.exports = {
    Scrape: Scrape,
} 
//mongodb w/o mongoose for learning :D
// This async function sends data to mongodb
(async () => {
    try {
        await Scrape();

        const database = client.db('sneakers') // database cluster
        const coll = database.collection('sneakerCollection') //  db collection: a group of doc's / in sql this is similar to a DB table
        for (let product of products) { // Document: set of key-value pairs in products
            coll.updateOne({ data: product }, { $set: { product } }, { upsert: true }) // sets 'data' to product, $set replaces the value of a product, upsert 'true' updates the product if it contains different keys
        }
    } finally {
        await client.close();
    }
})().catch(console.dir) 


