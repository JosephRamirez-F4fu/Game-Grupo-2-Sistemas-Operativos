import {Router} from 'express';
import {createCart,deleteCart,getCart,getProduct} from '../controllers/carrito.controller.js';
const router = Router();

router.post('/api/cart',createCart);

router.delete('/api/cart/',deleteCart);

router.get('/api/cart/',getCart);

router.get('/api/cart/product',getProduct);

export default router;