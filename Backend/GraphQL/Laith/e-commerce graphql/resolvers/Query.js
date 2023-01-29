exports.Query = {
  hello: () => {
    return "Hello World";
  },
  products: (parent, args, { db }) => {
    let filteredProducts = db.products;
    if (args.filter) {
      // filter by onSale
      if (args.filter.onSale === true) {
        filteredProducts = filteredProducts.filter((prod) => {
          return prod.onSale;
        });
    }
    // filter by avgRating
    if ([1,2,3,4,5].includes(args.filter.avgRating)) {

    filteredProducts = filteredProducts.filter((prod)=>{
      let sumRating = 0;
      let totalReviews = 0;
      db.reviews.forEach((rev)=>{
        if (rev.productId === prod.id){
          sumRating += rev.rating;
          totalReviews++;
        }
      })
      const avgRating = sumRating / totalReviews;
      return avgRating >= args.filter.avgRating; // if this is true, the product will be included in the filteredProducts array 
    })
    }
  }
        return filteredProducts;
  },
  product: (parent, args, { db }, info) => {
    const productId = args.id;
    const product = db.products.find((product) => {
      return product.id === productId;
    });
    if (!product) {
      throw new Error(`Product with id ${productId} not found`);
    }
    return product;
  },
  categories: (parent,args,{db}) => {
    return db.categories;
  },
  category: (parent, args, { db}) => {
    const categoryId = args.id;
    const category = db.categories.find((categ) => {
      return categ.id === categoryId;
    });
    if (!category) {
      throw new Error(`Category with id ${categoryId} not found`);
    }
    return category;
  },
};
