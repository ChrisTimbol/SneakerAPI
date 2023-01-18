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
const products = [];

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


/* (async () => {
    try {
        await Scrape();

        const database = client.db('sneakers')
        const coll = database.collection('sneakerCollection')
        for (let data of products) {
            coll.updateOne({ data: data }, { $set: { data } }, { upsert: true })

        }
    } finally {
        await client.close();
    }


})().catch(console.dir) */


