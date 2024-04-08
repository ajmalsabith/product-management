const express= require('express')

const fullRoutes= express()
const productController= require('../Controllers/productController')

fullRoutes.post('/add',productController.addProduct)
fullRoutes.get('/get',productController.productList)
fullRoutes.get('/productvalue',productController.findValueOfProducts)
fullRoutes.post('/edit',productController.editProduct)
fullRoutes.delete('/delete/:id',productController.deleteProduct)


module.exports= fullRoutes


