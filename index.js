require('dotenv').config()

const express = require('express');


const app = express()

const port = process.env.PORT


app.get ('/' , (req , res )=>{ 
    res.send("hellow baby ")
} )

app.get ('/twt' , (req , res )=>{ 
    res.send("hellow baby jayesh ")
} )

app.get ('/jaye' , (req , res )=>{ 
    res.send("<h1>Rohit Sharma is the best </h1> ")
} )
app.listen(port,()=>{
    console.log(`the server is running on ${port} successfully`)
})
