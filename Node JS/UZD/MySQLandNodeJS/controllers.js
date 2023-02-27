import DB from './db.js'


export async function getItems(req, res){
    const items = await DB.query('SELECT id, title FROM public.items limit 2');
    res.json(items)
}

export async function addItem(req, res){
    const { title } = req.body
    const id = await DB.query('INSERT INTO public.items (title, description, price) VALUES ($1, $2, $3) RETURNING id', [title, description, price])
    res.json({id})
}

export async function removeItemById(req, res){
    const { id } = req.params
    await DB.query(`DELETE FROM public.items WHERE id = ${id} `)
    res.json({id})
}