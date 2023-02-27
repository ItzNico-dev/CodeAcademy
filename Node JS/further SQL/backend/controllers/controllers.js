import DB from '../db/db.js';

// select * from products order by id limit 5 offset 10

export async function getProductsPaginate(req, res){
  try {
    const {  size, page } = req.query
    const products = await DB.query(`select * from products order by id limit ${size} offset ${(page - 1) * size}`)
    const count = await DB.query('select count(id) from products')
    const rowCount = count.rows[0].count
    
    const resObj = {
      totalPages: Math.ceil (rowCount / size),
      data: products.rows
    }
    
    res.json(resObj)
    
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export async function getAllProducts(req, res) {
  try {
    const products = await DB.query('SELECT id, description, price, title FROM products');
    res.json(products.rows)
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export async function getProductById(req, res) {
  try {
    const { id } = req.params;
    const product = await DB.query(`select id, description, price, title from products where id=${id}`)

    res.json(product.rows[0])
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export async function createNewProduct(req, res) {
  try {
    const {
      title,
      description,
      price
    } = req.body;
  
    const product = await DB.query(`insert into products (title, description, price) values ('${title}', '${description}', ${price})`)
    res.json(product);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export async function updateProductById(req, res) {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      price
    } = req.body;
  
    const product = await DB.query(`update products set price=${price}, description='${description}', title='${title}' where id=${id}`);
    res.json({success: true})
  } catch (error) {
    res.status(500).json({error: error.message}); 
  }
}


export async function deleteProductById(req, res) {
  try {
    const { id } = req.params;
    const product = await DB.query(`delete from products where id=${id}`);

    res.json({success: true})
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export async function routeNotFound(req, res) {
  res.status(404).json({error: 'Endpoint not found'})
}