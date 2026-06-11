import api from "./api";

export const detectarIngredientes = async (imagen) => {

    const formData = new FormData();

    formData.append("imagen", imagen);

    const response = await api.post(
        "/ia/ingredientes",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;
};