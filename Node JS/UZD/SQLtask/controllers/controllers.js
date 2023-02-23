import DB from '../db/db.js';

export async function serverNotWorking(){
    console.log('Working');
}

export async function getTenCheapestShirts(req,res){
    try {
    const cheapestShirts = await DB.query('SELECT * FROM shirts ORDER BY price ASC LIMIT 10')
    res.status(200).json(cheapestShirts)
    } catch (error) {
    res.status(500).json({error: error.message})
    }
}

export async function createNewItem(req,res){
    try {
        const {brand, sizes, price} = req.body
        const newItem = await DB.query(`INSERT INTO shirts (brand, sizes, price) VALUES ('${brand}', '${sizes}', ${price})`)
        res.status(201).json(newItem)
    } catch (error) {
    res.status(500).json({error: error.message})
    }
}