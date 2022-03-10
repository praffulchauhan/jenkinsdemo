const express = require("express")

const app = express()

app.get('/',(req,res)=>
{
    console.log("Index Page logged in the logs")
    res.send("<h1>WELCOME TO THE NODE APP</h1>")
})

app.get('/about',(req,res)=>
{
    console.log("About Page logged in the logs")
    res.send("<h1>This is About page</h1>")
})

app.listen(3000);