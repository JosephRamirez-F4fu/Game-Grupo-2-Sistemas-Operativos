import { PORT } from "../../../server/config";
import axios from "axios";

export const getUsuario = async (Usuario) => {
  await axios.get(`http://localhost:${PORT}/api/usuario`, Usuario);
};

export const postUsuario = async (Usuario) => {
    await axios.post(`http://localhost:${PORT}/api/usuario`, Usuario);
  };
