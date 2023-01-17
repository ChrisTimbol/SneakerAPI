require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb')


// pass client to other files
// inside files set productcard'key' value to update
// sleep
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sneaker.1nvjvbv.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri)
async function run() {
    try {
        const database = client.db('sneakers')
        const coll = database.collection('sneakerCollection')
        const query =  coll.updateOne({ product : { $exists: true }, {$set: productCard}, true })

    } finally {
  
        await client.close();
    }
}
run().catch(console.dir); 

/*
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.get('/', async (req, res) => {

 

})
app.listen(port, () => {
    console.log(`ready on http://localhost:${port}`)
})

module.exports = app 


const path = require('path');


app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));

}) 
*/