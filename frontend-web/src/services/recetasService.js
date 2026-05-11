import api from "./api";

export const getRecipes = async () => {
    return await api.get("/recipes");
};