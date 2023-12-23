
exports.addProduct = (req,res) => {
    res.json({
        msg : "Hello from add-product ",
        state : 1 , 
        data : ['iphone', 'mac' , 'tablet'],
        
    })
}