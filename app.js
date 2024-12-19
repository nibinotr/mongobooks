const express = require ('express')
const mongoose = require ('mongoose')

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello")
})

async function main() {
    await mongoose.connect('mongodb+srv://otrnibin:UDsSOcHClSV9HDC4@cluster0.78i6o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/mongobooks');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  main()
  .then(()=>console.log("Database connected"))
  .catch(err => console.log(err));

  const bookdata = require('./models/book')


app.listen(3001,()=>{
    console.log("server started")

})