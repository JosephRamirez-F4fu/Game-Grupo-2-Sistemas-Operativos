import {pool} from '../db.js';
//crear un tipo de anuncio
export const createTypeAdd = async (req, res) => {
    try {
        const [result] = await pool.query('INSERT INTO tipo_anuncios (nombre) VALUES ($1)', [req.body.nombre]);
        req.status(200).json(result);
    }catch (error) {
        res.status(500).json(error);
    };
};
//obtener un tipo de anuncio
export const getTypeAdd = async (req, res) => {
    try{
        const [result] = await pool.query('SELECT * FROM tipo_anuncios WHERE nombre = $1', [req.body.nombre]);
        result.status(200).json(result);
    }catch(error){
        res.status(500).json(error);
    };
};
//crear un anuncio
export const CreateAdd = async (req, res) => {
    try {
        const [result] = await pool.query('INSERT INTO anuncios (nombre, Videojuego_id, url,TipoAnuncio_id) VALUES ($1, $2, $3,$4)', [req.body.nombre, req.body.Videojuego_id, req.body.url,req.body.TipoAnuncio_id]);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error);
    }
};
//obtener anuncios de un producto
export const getAddProduct = async (req, res) => {
    try{
        const [result] = await pool.query('SELECT * FROM anuncios WHERE Videojuego_id = $1', [req.body.Videojuego_id]);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json(error);
    };
}

//obtener anuncios de un producto de un tipo de anuncio
export const getAddType = async (req, res) => {
    try{
        const [result] = await pool.query('SELECT * FROM anuncios WHERE TipoAnuncio_id = $1', [req.body.TipoAnuncio_id]);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json(error);
    };
}


