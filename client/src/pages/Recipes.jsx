import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const Recipes = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/recipe/getRecipes");
      const data = response.data;
      if (!data.success) {
        setError(data.message);
      }
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <div>
      {loading && <p>Loading recipes...</p>}
      {error && <p className="text-red-700">{error}</p>}
      {recipes.length > 0 && (
        <ul className=" flex flex-wrap p-5 gap-8 max-w-96 h-96">
          {recipes.map((recipe) => (
            <Link to={`/recipe/${recipe._id}`} key={recipe._id}>
              <li
                className="rounded-lg flex flex-col card-component"
              >
                <img
                  src={recipe.imageUrls[0]}
                  className="rounded-t-lg h-72 object-cover "
                />
                <p className="text-center p-5 bg-yellow-400 rounded-b-lg">
                  <span className="font-semibold">{recipe.title}</span> -{" "}
                  <span>{recipe.category}</span>
                </p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recipes;
