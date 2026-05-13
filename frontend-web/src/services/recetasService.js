import api from "./api";

export const obtenerRecetas = async () => {
    const response = await api.get("/recetas");
    return response.data;
};