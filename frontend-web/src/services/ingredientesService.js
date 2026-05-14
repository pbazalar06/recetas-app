import axios from "axios";

const API_URL = "http://localhost:8080/ingredientes";

export const obtenerIngredientes = async () => {

    const response = await axios.get(API_URL);

    return response.data;

};