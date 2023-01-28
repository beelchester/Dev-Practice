const { v4: uuidv4 } = require('uuid');
// mutation is used to make changes to the data 
exports.Mutation = {
  addCategory : (parent,{input},{db}) => {
    const newCategory = {
      id : uuidv4(),
      name : input.name
    }
    db.categories.push(newCategory)
    return newCategory
  },

  addProduct : (parent,{input},{db}) => {
    const newProduct = {
      id : uuidv4(),
      name : input.name,
      description : input.description,
      quantity : input.quantity,
      price : input.price,
      onSale : input.onSale,
      categoryId : input.categoryId
    }
    db.products.push(newProduct)
    return newProduct
  },

  deleteCategory : (parent,{id},{db}) => {
    db.categories = db.categories.filter((category) => {
      return category.id !== id
    } )
    // to remove the category id from products and change it to null
    db.products = db.products.map((product) => {
      if (product.categoryId === id) {
        product.categoryId = null
      }
      return product
    })
    return true
  },

  deleteProduct : (parent,{id},{db}) => {
    db.products = db.products.filter((product) => {
      return product.id !== id
    })
    db.reviews = db.reviews.filter((review) => {
      return review.productId !== id
    })
    return true
  } ,

  deleteReview : (parent,{id},{db}) => {
    db.reviews = db.reviews.filter((review) => {
      return review.id !== id
    })
    return true
  },

  // to update product
  updateProduct : (parent,{id,input},{db}) => {
    let product = db.products.find((product) => {
      return product.id === id
    })
    // product.name = input.name
    input.name && (product.name = input.name)
    input.description && (product.description = input.description)
    input.quantity && (product.quantity = input.quantity)
    input.price && (product.price = input.price)
    input.onSale && (product.onSale = input.onSale)
    input.categoryId && (product.categoryId = input.categoryId)
    
    return product
  },
  
  // to update category
  updateCategory : (parent,{id,input},{db}) => {
    let category = db.categories.find((category) => {
      return category.id === id
    })
    input.name && (category.name = input.name)
    return category
  },

  updateReview : (parent,{id,input},{db}) => {
    let review = db.reviews.find((review) => {
      return review.id === id
    })
    input.title && (review.title = input.title)
    input.body && (review.body = input.body)
    input.rating && (review.rating = input.rating)
    return review
  }
}