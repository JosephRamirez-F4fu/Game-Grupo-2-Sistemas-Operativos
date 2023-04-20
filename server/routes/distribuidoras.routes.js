import {Router} from 'express';
import { getDistribuidorasOfProduct,getProductOfDesarrolladora,insertProductoDesarrolladora} from '../controllers/distribuidoras.controller.js';
const router = Router();

//get los anuncios de un producto de un terminado tipo de anuncio
router.get('/api/distribuidoras/producto',getDistribuidorasOfProduct);

//get los tipos de anuncio
router.get('/api/distribuidoras/producto',getProductOfDesarrolladora);
//creame un nuevo anuncio
router.post('/api/distribuidora/producto',insertProductoDesarrolladora);

export default router;