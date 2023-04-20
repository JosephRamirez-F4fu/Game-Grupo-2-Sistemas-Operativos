import { PORT } from "../../../server/config";
import axios from "axios";

export const getDistribuidorasOfProduct= async (Cart) => {
    const response = await axios.post(`${PORT}/api/distribuidoras/producto`, Cart);
}
export const getProductOfDesarrolladora= async (Cart) => {
    const response = await axios.delete(`${PORT}/api/distribuidoras/producto`, Cart);
};
export const insertProductoDesarrolladora= async (Cart) => {
    const response = await axios.get(`${PORT}/api/distribuidora/producto`, Cart);
};
