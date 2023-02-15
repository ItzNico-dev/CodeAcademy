import express from "express";
import cars from './db.js'

export async function getAllData(req,res){
    res.send(cars)
}