import {
  MainCardsStyled,
  ButtonContainer,
  CardsContainer,
  ImageContainer,
} from "./mainCards.Styled";

import { useEffect, useState } from "react";
import supabase from "../../Utils/SupabaseClient";
import { Link } from "react-router-dom";

import heartregular from "../../Assets/Button/heart-regular.svg";
import heartsolid from "../../Assets/Button/heart-solid.svg";

import { FavoritesContext } from "../../Providers/FavoritesContext";
import { useContext } from "react";

import { Title } from "../Title/Title";

export const MainCards = () => {
  const [poster, setPoster] = useState([]);
  const [loading, setLoading] = useState(true);

  const { favorites, handleToggleFavorite } = useContext(FavoritesContext);

  const getPoster = async () => {
    if (supabase) {
      setLoading(true);
      const { data, error } = await supabase
        .from("poster")
        .select("*, genreposterrel(genre_id(*))")
        .limit(4);
      if (error) {
        console.error("Error fetching poster", error);
      } else {
        setPoster(data);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    getPoster();
  }, [setPoster, supabase]);

  const isFavorite = (item) => {
    return favorites.some((fav) => fav.id === item.id);
  };

  console.log(poster);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!poster) {
    return <p>Poster not found</p>;
  }

  return (
    <MainCardsStyled>
      <div>
        <Title>Fire tilfældige...</Title>
      </div>

      <CardsContainer>
        {poster &&
          poster.map((poster, index) => {
            const isFav = isFavorite(poster);
            console.log(isFav);
            console.log();

            return (
              <figure key={index}>
                <ImageContainer>
                  <img src={poster.image} alt={poster.name} />
                </ImageContainer>
                <figcaption>
                  <article
                    dangerouslySetInnerHTML={{ __html: poster.description }}
                  />
                  <p>
                    Genre:{" "}
                    {poster.genreposterrel &&
                      poster.genreposterrel.map((genre, index) => {
                        return <span key={index}>{genre.genre_id.title}</span>;
                      })}
                  </p>
                  <ButtonContainer>
                    <button>
                      <Link
                        to={`/PlakaterPage/${poster.genreposterrel[0].genre_id.id}/${poster.id}`}
                      >
                        Læs mere
                      </Link>
                    </button>
                    <button onClick={() => handleToggleFavorite(poster)}>
                      {isFav ? (
                        <img src={heartsolid} alt="heart-solid" />
                      ) : (
                        <img src={heartregular} alt="heart-regular" />
                      )}
                    </button>
                  </ButtonContainer>
                </figcaption>
              </figure>
            );
          })}
      </CardsContainer>
    </MainCardsStyled>
  );
};
