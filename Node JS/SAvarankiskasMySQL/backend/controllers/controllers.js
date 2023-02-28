import DB from '../db/db.js';

export async function getAllCars(req, res) {
  try {
    const cars = await DB.query('SELECT * FROM cars');
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCarsById(req, res) {
  try {
    const { id } = req.params;
    const car = await DB.query(`SELECT * FROM cars WHERE id=${id}`);
    if (car.rows.length !== 0) {
      res.json(car.rows);
    } else {
      res.status(404).json({ error: 'Car not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postNewCar(req, res) {
  try {
    const { title, image, price, numberplate } = req.body;
    if (
      title &&
      image &&
      price &&
      numberplate &&
      numberplate.length === 6 &&
      typeof title === 'string'
    ) {
      const newCar = await DB.query(
        `INSERT INTO public.cars (title, image, price, numberplate) VALUES('${title}', '${image}', ${price}, '${numberplate}')`
      );
      res.json(newCar);
    } else {
      res.status(400).json({ error: 'incorrect data' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteCarById(req, res) {
  try {
    const { id } = req.params;
    if (typeof id === 'number') {
      const deletedCar = await DB.query(`DELETE FROM cars WHERE id=${id}`);
      res.json({ success: true });
    } else {
      res.status(404).json({ error: 'non existing id' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
