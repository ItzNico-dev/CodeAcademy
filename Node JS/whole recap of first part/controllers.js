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


export async function getProducts(req, res) {
  try {
    const product = await Products.find({}).populate('category');
    res.json(product);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}