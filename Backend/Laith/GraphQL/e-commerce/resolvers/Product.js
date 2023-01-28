
exports.Product = {
  category : ({categoryId}, args, {db}) => {
    // const {categories} = context
    // const categoryId = parent.categoryId
    const category = db.categories.find((category) => {
      return category.id === categoryId
    })
    return category
  },
  reviews : ({id}, args, {db}) => {
  const productReviews = db.reviews.filter(rev => {
    return rev.productId === id
  })
  return productReviews
  }
}