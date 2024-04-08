const express=require('express')
const cors= require('cors')
const { default: mongoose } = require('mongoose')
const fullroutes= require('./Routes/fullRoutes')
const bodyParser = require('body-parser'); 


const app=express()

app.use(cors({
    origin:['http://localhost:4200']
}))

app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }));
app.use(bodyParser.json({ limit: '100mb' }));



app.use('',fullroutes)

mongoose.connect('mongodb://127.0.0.1:27017/products-manage').then(()=>{
    console.log('data base successs...');
}).catch((err)=>{
    console.log(err);
})


app.listen(4000,()=>{
    console.log('server started...');
})