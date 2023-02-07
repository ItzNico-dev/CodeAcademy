import express from "express";
const mainRoute = express();
import router1 from "./routes/route.js";

mainRoute.use("/", router1);

export default mainRoute;
