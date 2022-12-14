//const path = require('path');
const listProducts = [{id:1,name:'blank',price:'10',category:'hardware'},{id:2,name:'iosa',price:'40',category:'pc'}];
const mainController = {

    // index: (req, res) => {
    //     res.sendFile(path.join(__dirname,'../views/index.ejs'));
    //   }
    
    index: (req,res)=> {res.render('index',{products:listProducts});

},

 detail: (req,res) =>{
    const id = req.params.id;
    const products = listProducts.find(products=>{products.id == id});
    res.render('detailProducts',{products});
 },

}

module.exports = mainController;