import { useEffect, useState } from "react";
import { getRecipes } from "../../services/recetasService";

function Recetas() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes()
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Recetas</h1>

            {
                recipes.map(recipe => (
                    <div key={recipe.id}>
                        <h2>{recipe.titulo}</h2>
                        <p>{recipe.descripcion}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Recetas;