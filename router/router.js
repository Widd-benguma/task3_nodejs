const express = require('express');
const router = express.Router();
const PostsController = require('../controller/PostsController')
const UsersController = require('../controller/UsersController')
const ProductController = require('../controller/ProductController')



router.get('/', (req,res) => {
  res.status(200)

})

router.post('/login', UsersController.LoginUser)
router.post('/signup', UsersController.SignUpUser)
router.get('/add-product', ProductController.addProduct)
router.get('/posts', PostsController.GetAllPosts)







module.exports = router