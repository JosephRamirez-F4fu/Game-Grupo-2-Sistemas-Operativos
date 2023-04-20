import {Router} from 'express';
import {createTypeAdd,CreateAdd, getAddType,getTypeAdd} from '../controllers/anuncios.controller.js';
const router = Router();

//get los anuncios de un producto de un terminado tipo de anuncio
router.get('/api/anuncios',getAddType);

//get los tipos de anuncio
router.get('/api/anuncios/tipo',getTypeAdd);
//creame un nuevo anuncio
router.post('/api/anuncios',CreateAdd);

export default router;