import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { getRandomColor } from "../lib/utils";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl mt-4">My Favorites</h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Your saved recipes
        </p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
