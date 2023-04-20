import {pool} from '../db.js';

//crear un Distribuidora
export const createDistribuidora = async(req,res)=>{
    try{
        const {nombre} = req.body;
        const [result] = await pool.query('INSERT INTO Distribuidoras (nombre) VALUES ($1)',[nombre]);
        res.status(201).json(result);
    }catch(error){
        res.status(500).json(error);
    }
}
//obtener Distribuidora de un producto
export const getDistribuidorasOfProduct = async(req,res)=>{
    try{
        const {Productos_id} = req.body;
        const [result] = await pool.query('SELECT * FROM Distribuidoras WHERE Productos_id = $1',[Productos_id]);
        res.status(200).json(result.rows);
    }catch(error){
        res.status(500).json(error);
    }
}

//obtener un productos de una Distribuidora
export const getProductOfDesarrolladora = async(req,res)=>{
    try{
        const {Distribuidoras_id} = req.body;
        const [result] = await pool.query('SELECT * FROM Productos WHERE Desarrolladoras_id = $1',[Distribuidoras_id]);
        res.status(200).json(result.rows);
    }catch(error){
        res.status(500).json(error);
    }
}

//añadir un Distribuidora a un producto
export const insertProductoDesarrolladora = async(req,res)=>{
    try{
        const {Productos_id,Distribuidoras_id} = req.body;
        const [result] = await pool.query('INSERT INTO ProductosDistribuidoras (Productos_id,Distribuidoras_id) VALUES ($1,$2)',[Productos_id,Distribuidoras_id]);
        res.status(201).json(result);
    }catch(error){
        res.status(500).json(error);
    }
}

