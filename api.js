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
