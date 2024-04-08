const mongoose= require('mongoose')

const newScheema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    is_block:{
        type:Boolean,
        default:false
    }
})

module.exports= mongoose.model('products-manage',newScheema)