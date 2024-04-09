const express=require('express')
const cors= require('cors')
const { default: mongoose } = require('mongoose')
const fullroutes= require('./Routes/fullRoutes')
const bodyParser = require('body-parser'); 


const app=express()

app.use(cors({
    origin:['https://product-manage-ment.netlify.app']
}))

app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }));
app.use(bodyParser.json({ limit: '100mb' }));



app.use('',fullroutes)

mongoose.connect('mongodb+srv://ajmalsabith444:q4E4Upt5mU8qwnr1@cluster0.abq0m5p.mongodb.net/products-manage').then(()=>{
    console.log('data base successs...');
}).catch((err)=>{
    console.log(err);
})


app.listen(4000,()=>{
    console.log('server started...');
})