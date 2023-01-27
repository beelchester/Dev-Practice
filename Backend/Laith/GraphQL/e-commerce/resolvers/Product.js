
exports.Product = {
  category : ({categoryId}, args, {categories}) => {
    // const {categories} = context
    // const categoryId = parent.categoryId
    const category = categories.find((category) => {
      return category.id === categoryId
    })
    return category
  },
  reviews : ({id}, args, {reviews}) => {
  const productReviews = reviews.filter(rev => {
    return rev.productId === id
  })
  return productReviews
  }
}