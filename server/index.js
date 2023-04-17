
import express from 'express';
import cors from 'cors';
import {PORT} from "./config.js";
import indexRoutes from './routes/index.routes.js';

const app =express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.listen(3000);
console.log( `server is running on port ${PORT}`);