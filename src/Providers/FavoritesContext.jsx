import { createContext } from "react";
import { useFavorites } from "../Utils/useFavorites";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { favorites, handleToggleFavorite } = useFavorites();

  return (
    <FavoritesContext.Provider value={{ favorites, handleToggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
