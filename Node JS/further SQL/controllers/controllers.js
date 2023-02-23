import DB from '../db/db.js'

export async function getAllProducts(req,res){
    try {
    const products = await DB.query('SELECT id, description, price, title FROM products')
    res.json(products.rows)
    } catch (error) {
        req.status(500).json({error: error.message})
    }
}
export async function createNewProducts(req, res){
    try {
        const {description, price, title} = req.body
        const product = await DB.query(`INSERT INTO products (description, price, title) VALUES ${description} ${price} ${title}`)
        res.json(product.rows[0])
    } catch (error) {
        req.status(500).json({error: error.message})
    }
}

export async function getProductById(req,res){
    try {
        const {id} = req.params
        const product = await DB.query(`SELECT id, description, price, title FROM products WHERE id = ${id}`)
        res.json(product.rows[0])
    } catch (error) {
        req.status(500).json({error: error.message})
    }
}