import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="flex">
      {recipes.length > 0 && (
        <ul className="flex flex-wrap">
          {recipes.map((recipe) => (
            <Link to={`/recipe/${recipe._id}`} key={recipe._id}>
            <li className="rounded-lg flex flex-col card-component w-96 m-8">
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
          {loading & !error && <p className="text-green-400 text-3xl text-center pt-60">Loading, please wait...</p>}
          {error && <p className="text-red-700 text-3xl text-center pt-60">{error}</p>}
        </ul>
      )}
    </div>
  );
};

export default Recipes;

