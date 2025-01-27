import { FavoritesStyled } from "./Favorites.Styled";
import { FavoritesContext } from "../../Providers/FavoritesContext";
import { useContext } from "react";

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  console.log(favorites);

  return (
    <FavoritesStyled>
      <h2>Favorites</h2>

      {favorites &&
        favorites.map((PosterItem) => {
          return (
            <div key={PosterItem.id}>
              <p>{PosterItem.name}</p>
            </div>
          );
        })}
    </FavoritesStyled>
  );
};
