import Categories from "./models/categoryModel.js"
import Products from "./models/productModel.js"


export async function getAllCategories(req,res) {
    try {
    const categories = await Categories.find({})

    res.json(categories)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


export async function getProductsWithCategories(req, res) {
  try {
    const product = await Products.find({}).populate('category', {}, 'Categories');
    res.json(product);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export async function getCategoryValue(req, res) {
  try {
    const categories = await Categories.find();
    const products = await Products.find().populate("category", "title");

    const sums = {};

    products.forEach((product) => {
      const categoryId = product.category._id;
      const categoryTitle = product.category.title;
      const price = product.price;

      if (sums[categoryId]) {
        sums[categoryId].total += price;
      } else {
        sums[categoryId] = {
          title: categoryTitle,
          total: price
        };
      }
    });

    const result = [];

    for (const categoryId in sums) {
      result.push(sums[categoryId]);
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}