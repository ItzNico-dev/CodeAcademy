import express from "express";
const router = express.Router();
import cars from "../db/cars.js";

router.get("/cars/:brand", (req, res) => {
  const brand = req.params.brand;
  if (!cars[brand]) {
    return res.status(404).send("brand not found");
  }
  return res.send(cars[brand]);
});

export default router;
