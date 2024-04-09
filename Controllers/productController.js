const product= require('../Models/productModel')


const addProduct=async (req,res)=>{
    try {

        const {name,price,quantity,category}=req.body.data

        if(name,price,quantity,category){

            const newproduct= new product({
                name:name,
                price:price,
                quantity:quantity,
                category:category
            })

            const result= await newproduct.save()

            if(result){
                res.status(200).send({
                    message:'product adding success'
                })
            }else{
                res.status(400).send({
                    message:'somthing went wrong...!'
                })
            }
        }else{
            res.status(400).send({
                message:'somthing went wrong...!'
            })
        }
        
    } catch (error) {
        console.log(error.message);
    }
}


const editProduct= async (req,res)=>{
    try {
        const {price,name,quantity,category,id}= req.body.data
        if(price&&name&&quantity&&category){
       
                const updatedata= await product.updateMany({_id:id},{$set:{name:name,price:price,quantity:quantity,category:category}})
                if(updatedata){
                    res.status(200).send({
                        message:'product updated '
                    })
                }else{
                    res.status(400).send({
                        message:'somthing went wrong...!'
                    })
                }
          
           
        }else{
            res.status(400).send({
                message:'somthing went wrong...!'
            })
        }
        
    } catch (error) {
        console.log(error.message);
    }
}


const deleteProduct = async(req,res)=>{
    try {

        const id= await req.params.id

        
        const productdata= await product.deleteOne({_id:id})
        if (productdata) {
           
               res.send({
                message:'product deleted'
               })
           
            
        }else{
            res.status(400).send({
                message:'something wrong..!'
            })
        }
       
    } catch (error) {
        console.log(error.message);
    }
}


const productList=async (req,res)=>{
    try {
        const productdata= await product.find()
        if(productdata){
            res.status(200).send({
                productdata:productdata
            })
           
        }else{
            res.status(400).send({
                message:'something wrong..!'
            })
        }
        
    } catch (error) {
        console.log(error.message);
    }
}


const findValueOfProducts=async (req,res)=>{
    try {
        
        const prodata= await product.find()
        const total = prodata.map(item => {
            return { 
                name: item.name, 
                totalPrice: item.price * item.quantity 
            }
        })

        if(total){
            res.send({
                data:total
            })
        }else{
            res.status(400).send({
                message:'something went wrong...!'
            })
        }
        
    } catch (error) {
        
    }
}



module.exports={
    addProduct,
    editProduct,
    deleteProduct,
    productList,
    findValueOfProducts
}