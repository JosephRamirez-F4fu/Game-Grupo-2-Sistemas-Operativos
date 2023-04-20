import {pool} from '../db.js';

//obtener usuario por su correo y contraseña

export const getUser= async (req, res) => {
    try {

        const {correo, password} = req.body;
        const [result] = await pool.query('SELECT * FROM Clientes WHERE email = ? AND password = ?', [correo, password]);

        if (result.length === 0) {
            return res.status(404).json({message:"User not found"});
        };
        return res.status(200).json(result[0]);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};


//crear usuario
export const createUser = async (req, res) => {
    try{
        const {nombre, apellido, correo ,direccion,codigo_postal,password} = req.body;
        cosnt [result] = await pool.query('INSERT INTO Clientes (nombre, apellido, correo,direccion,codigo_postal,contrasenia) VALUES (?,?,?,?,?,?)', [nombre,apellido,correo,direccion,codigo_postal,password]);
        res.json(result[0]);
    }catch(error){
        return res.status(500).json({message:error.message});
    };
};



