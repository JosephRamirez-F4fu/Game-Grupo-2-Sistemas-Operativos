
import {pool} from '../db.js';

//Obtener todos los productos
export const getProductos=async (req,res)=>{
  try{
    const [result] = await pool.query(`SELECT * FROM Productos`);
    res.json(result);
  }
  catch(error){
    return res.status(500).json({
      message:error.message
    });
  }
};

//Obtener un producto por su nombre

export const getProductobyname=async (req,res)=>{
  try{
  const [result] = await pool.query(`SELECT * FROM Productos WHERE Nombre = '${req.params.name}'`);
  res.json(result);
  }
  catch(error){
    return res.status(500).json({
      message:error.message
    });
  };
};

//Obtener un producto por su id

export const getProductobyid=async (req,res)=>{
  try{
  const [result] = await pool.query(`SELECT * FROM Productos WHERE Id = '${req.params.id}'`);
  res.json(result);
  }
  catch(error){
    return res.status(500).json({
      message:error.message
    });
  };
};

//Delete Producto por su id

export const deleteProductobyid=async (req,res)=>{
  try{
    const [result] = await pool.query(`DELETE FROM Productos WHERE Id = '${req.params.id}'`);
    res.json(result);
  }
  catch(error){
    return res.status(500).json({
      message:error.message
    });
  }
};

//Insertar un producto

export const insertProducto=async (req,res)=>{
  try{
    const [result] = await pool.query(`INSERT INTO Productos (NOMBRE,PRECIOVENTA,TIPOPRODUCTOS_ID) VALUES ('${req.params.nombre}','${req.params.PrecioVenta}'),'${req.params.TipoProductos_id}'`);
    res.json(result);
  }
  catch(error){
    return res.status(500).json({
      message:error.message
    });
  }
};

