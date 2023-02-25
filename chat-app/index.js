const express= require('express')
const bodyParser=require('body-parser')
const fs=require('fs')
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
app=express()

app.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem("username",document.getElementById(`usa`).value)" action="/" method="POST"><input type="text" name="user" id="usa"><button type="submit">Submit</button></form>'
    )
})
app.use(bodyParser.urlencoded({extended: false}))

app.post('/write',(req,res,next)=>{
    const b= req.body.chat
    const a=req.body.user
    fs.appendFileSync('chat.txt',`${a}:${b}`+"\n")
    localStorage.setItem(`${a}`,b)
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    const c=fs.readFileSync('chat.txt')
    console.log(req.body);
    res.send(`
    <html>
    <body>
    ${c}
    <form action='/write' method='POST'>
    <input type='text' name='chat'>
    <input type="hidden" name='user' value="${req.body.user}">
    <button type='submit'>Submit</button>
    </form>
    </body>
    </html>
    `)
})

app.listen(3000)