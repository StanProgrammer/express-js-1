const http=require('http')

const express=require('express')

const app=express()

app.use((req,res,next)=>{
    console.log('In the middleware');
    
    next()
})
app.use((req,res,next)=>{
    // res.send('<h1>Hello My Name is Atib</h1>')
    res.send({key1:"value"})
    // console.log('In the another middleware');
})
// const server=http.createServer(app)
// server.listen(3000)
app.listen(3000)