const Product =require('../models/productModel');
const catchAsync = require('../middleware/errorCatchHandler');

// @desc Fetch all products
// @routes GET /api/products
// @access Public
const getProducts = catchAsync(async (req, res) => {
  //add  features
});

// @desc Fetch single products
// @routes GET /api/products/:id
// @access Public
const getProductById = catchAsync(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  res.json(product);
});

// @desc Delete a product
// @routes DELETE /api/products/:id
// @access Private/Admin
const deleteProduct = catchAsync(async (req, res) => {
  const deletedProduct = await Product.findByIdAndRemove(req.params.id);
  if(!deletedProduct) {
     throw new Error('Product not found');
  }
  res
      .status(204)
      .json({
          status: 'success',
          data: null
      });

});

// @desc Create product
// @routes POST /api/products
// @access Private/Admin
const createProduct = catchAsync(async (req, res) => {
  const {
    name,
    price,
    user,
    images,
    brand,
    category,
    countInStock,
    numReviews,
    description,
  }=req.body;

   
     const productExist = await Product.findOne({ name });
   
     if (productExist) {
       res.status(400);
       throw new Error("product already exists");
     }
   
     const product = await Product.create({
          name,
          price,
          user,
          images,
          brand,
          category,
          countInStock,
          numReviews,
          description,
     });
   
     if (product) {
       res.status(201).json({
         _id: product._id,
         name:product.name,
         price:product.price,
         user:product.user,
         images:product.images,
         brand:product.brand,
         category:product.category,
         countInStock:product.countInStock,
         numReviews:product.numReviews,
         description:product.description,
         images:product.images
       });
     } else {
       res.status(400);
       throw new Error("Invalid user data");
     }
   });

// @desc Update product
// @routes PUT /api/products/:id
// @access Private/Admin
const updateProduct = catchAsync(async (req, res) => {
   const updatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,
     { new: true, runValidators: true });
     if(!updatedProduct) {
        throw new Error('Product not found');
     }

             res
             .status(200)
             .json({
                 status: 'success',
                 data: {
                     user: updatedProduct
                 }
             });
});

// @desc Create new review
// @routes POST /api/products/:id/reviews
// @access Private
const createReview = catchAsync(async (req, res) => {


  
});

// @desc GET top rated products
// @routes POST /api/products/top
// @access Public
const getTopProducts = catchAsync(async (req, res) => {
  const products = await Product.find({ countInStock: { $gt: 0 } })
    .sort({ rating: -1 })
    .limit(3);

  res.json(products);
});

module.exports=
{
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createReview,
  getTopProducts,
};
