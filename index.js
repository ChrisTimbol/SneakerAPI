require('dotenv').config()
const path = require('path');
const express = require('express')
const { MongoClient} = require('mongodb')
const app = express()
const port = process.env.PORT || 3000
const products = []

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sneaker.1nvjvbv.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri);

app.get('/', async (req, res) => {
    const database = client.db('sneakers')
    const coll = database.collection('sneakerCollection')
    coll.find({}).toArray( (err, product) => {
        res.send(product)
    })
}) 
//
app.listen(port, () => {
    console.log(`ready on http://localhost:${port}`)
})

/* 
mongoose.set('strictQuery', false) // remove deprecated warning
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sneaker.1nvjvbv.mongodb.net/?retryWrites=true&w=majority`) // connect to DB
.then(() => {
    console.log('connected to mongoDB')
    app.get('/', async (req, res) => {
        const producter = await Product.find({}) //get allproducts
        res.status(200).json(producter)
    }) 
    app.listen(port, () => {
        console.log(`ready on http://localhost:${port}`)
    })
}).catch((err) => {console.log(err)}) 
*/
module.exports = app