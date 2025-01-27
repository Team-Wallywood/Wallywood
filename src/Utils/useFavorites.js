import { useState, useEffect } from "react";
import { FavData, readData, toggleFavorite } from "../localstorage/storage";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const updateFavorites = () => {
    readData();
    console.log("FavData after readData:", FavData);
    setFavorites([...FavData]);
  };

  useEffect(() => {
    updateFavorites();
  }, []);

  const handleToggleFavorite = (posterItem) => {
    toggleFavorite(posterItem);
    console.log("Toggled favorite:", posterItem);
    updateFavorites();
  };

  return { favorites, handleToggleFavorite };
};
