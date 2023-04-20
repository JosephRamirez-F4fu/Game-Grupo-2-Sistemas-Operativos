import { PORT } from "../../../server/config";
import axios from "axios";

export const getAddsOfProductType = async (Producto_AddType) => {
  await axios.get(`http://localhost:${PORT}/api/anuncios`, Producto_AddType);

};
export const getAddsType=async (AddTypeName) => {
    await axios.get(`http://localhost:${PORT}/api/anuncios/tipo`, AddTypeName);
};
export const CreateAdd = async (Add) => {
  await axios.post(`http://localhost:${PORT}/api/anuncios`, Add);
};
