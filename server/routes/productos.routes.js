import {Router} from 'express';
const router = Router();

router.get('api/productos', (req, res) => {
    res.send('Hello World!');
});

router.get('api/productos:id', (req, res) => {
    res.send('Hello World!');
});

router.post('api/productos', (req, res) => {
    res.send('Hello World!');
});

router.put('api/productos:id', (req, res) => {
    res.send('Hello World!');
});

router.delete('api/productos:id', (req, res) => {
    res.send('Hello World!');
});

export default router;