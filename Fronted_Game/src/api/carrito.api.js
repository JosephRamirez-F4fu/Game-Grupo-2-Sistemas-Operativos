import { PORT } from "../../../server/config";
import axios from "axios";

export const createCart= async (Cart) => {
    const response = await axios.post(`${PORT}/api/cart`, Cart);
}
export const deleteCart= async (Cart) => {
    const response = await axios.delete(`${PORT}/api/cart`, Cart);
};
export const getCart= async (Cart) => {
    const response = await axios.get(`${PORT}/api/cart`, Cart);
};
export const getProductofCart= async (Cart) => {
    const response = await axios.get(`${PORT}/api/cart/product`, Cart);
}