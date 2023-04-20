import {pool} from '../db.js';
//crear un desarrolladora
export const createDesarrolladora = async(req,res)=>{
    try{
        const {nombre} = req.body;
        const [result] = await pool.query('INSERT INTO Desarrolladoras (nombre) VALUES ($1)',[nombre]);
        res.status(201).json(result);
    }catch(error){
        res.status(500).json(error);
    }
}
//obtener desarrolladoras de un producto
export const getDesarrolladorasOfProduct = async(req,res)=>{
    try{
        const {Productos_id} = req.body;
        const [result] = await pool.query('SELECT * FROM Desarrolladoras WHERE Productos_id = $1',[Productos_id]);
        res.status(200).json(result.rows);
    }catch(error){
        res.status(500).json(error);
    }
}

//obtener un productos de una desarrolladora
export const getProductOfDesarrolladora = async(req,res)=>{
    try{
        const {Desarrolladoras_id} = req.body;
        const [result] = await pool.query('SELECT * FROM Productos WHERE Desarrolladoras_id = $1',[Desarrolladoras_id]);
        res.status(200).json(result.rows);
    }catch(error){
        res.status(500).json(error);
    }
}

//añadir un desarrolladora a un producto
export const insertProductoDesarrolladora = async(req,res)=>{
    try{
        const {Productos_id,Desarrolladoras_id} = req.body;
        const [result] = await pool.query('INSERT INTO ListaDesarrolladora (Productos_id,Desarrolladoras_id) VALUES ($1,$2)',[Productos_id,Desarrolladoras_id]);
        res.status(201).json(result);
    }catch(error){
        res.status(500).json(error);
    }
}

