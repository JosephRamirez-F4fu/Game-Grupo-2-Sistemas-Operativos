import { PORT } from "../../../server/config";
import axios from "axios";

export const postProducto = async (Producto) => {
  await axios.post(`http://localhost:${PORT}/api/productos`, Producto);
};