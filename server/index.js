
import express from 'express';
import cors from 'cors';

import {PORT} from './config.js';

import indexRoutes from './routes/index.routes.js';
import productoRoutes from './routes/productos.routes.js';


const app =express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(productoRoutes);

app.listen(PORT);
console.log( `server is running on port ${PORT}`);