require('dotenv').config()
const path = require('path');
const express = require('express')
const { MongoClient} = require('mongodb')
const app = express()
const port = process.env.PORT || 3000

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sneaker.1nvjvbv.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri);

app.get('/', async (req, res) => {
    const database = client.db('sneakers') 
    const coll = database.collection('sneakerCollection')
    coll.find({}).toArray( (err, product) => { /* finds all elements in db collection then sends to '/' */
        res.send(product)
    })
}) 
//
app.listen(port, () => {
    console.log(`ready on http://localhost:${port}`)
})

module.exports = app