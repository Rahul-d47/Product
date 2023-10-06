const express = require("express")
const ConnectToMongo = require("./db")
const app = express()
const port = 4000


ConnectToMongo()

app.use(express.json())

const prroute = require('./Route/prroute')
app.use('/api/product',prroute)

app.get('/greeting',(req,res)=>{
    console.log("HELLO")
    res.send("Simple API")
})

app.listen(port,()=>{
    console.log(`Server connected to: ${port}`)
})