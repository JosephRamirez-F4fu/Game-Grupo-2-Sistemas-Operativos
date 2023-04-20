import {pool} from '../db.js';

//obtener Distribuidoras de un producto
export const getDistribuidorasOfProduct = async(req,res)=>{
    try{
        const [result] = await pool.query('select * from ProductosDistrbuidoras PD INNER JOIN Productos P on PD.Productos_id = P.id WHERE PD.Productos_id = $1',[req.body.Productos_id]);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json(error);
    }
}

//obtener un productos de una Distribuidora
export const getProductOfDesarrolladora = async(req,res)=>{
    try{
        const [result] = await pool.query('select * from ProductosDistrbuidoras PD INNER JOIN Distribuidoras D on PD.Distribuidoras_id = D.id WHERE  D.Distribuidoras_id = $1',[req.body.Distribuidoras_id]);
        res.status(200).json(result);
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

