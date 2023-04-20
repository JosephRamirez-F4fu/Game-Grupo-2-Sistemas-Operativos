import {Router} from 'express';
import {getProductos,
    getProductobyid,
    insertProducto,
    deleteProductobyid,
    getProductobyname} from '../controllers/productos.controller.js';

const router = Router();

router.get('/api/productos',getProductos);
router.get('/api/productos/:id',getProductobyid);

router.post('/api/productos/:nombre/',insertProducto);

router.delete('/api/productos/:id',deleteProductobyid);

router.get('/api/productos/:name',getProductobyname);

export default router;