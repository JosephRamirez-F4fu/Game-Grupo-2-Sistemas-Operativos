import {pool} from '../db.js';
//obtener el carrito de compras de un usuario
export const getCart = async (req, res) => {
    try {
        const [cart] = await pool.query('SELECT * FROM CarritoCompras WHERE user_id = $1', [req.body.id]);
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

//crear carrito de compras a un usuario
export const createCart = async (req, res) => {
    try {
        const [cart] = await pool.query('INSERT INTO CarritoCompras (Productos_id, Clientes_id) VALUES ($1, $2)', [req.body.Productos_id, req.body.Clientes_id]);
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

//eliminar carrito de compras de un usuario
export const deleteCart = async (req, res) => {
    try {
        const [cart] = await pool.query('DELETE FROM CarritoCompras WHERE Productos_id = $1  and Clientes_id = $2', [req.body.Clientes_id, req.body.Clientes_id]);
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

//obtener producto de carrito de compras de un usuario
export const getProduct = async (req, res) => {
    try {
        const [product] = await pool.query('select * from Productos join CarritoCompras CC on Productos.id = CC.Productos_id where  CC.Productos_id = $1 and CC.Clientes_id= $2 ',[req.body.Productos_id, req.body.Clientes_id]);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

