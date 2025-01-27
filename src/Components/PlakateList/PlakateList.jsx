import {
  PlakateListStyled,
  PosterItem,
  PosterList,
  BtnContainer,
  PosterDetails,
} from "./PlakateList.Styled";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import supabase from "../../Utils/SupabaseClient";

import heartregular from "../../Assets/Button/heart-regular.svg";
import heartsolid from "../../Assets/Button/heart-solid.svg";

import { useContext } from "react";
import { FavoritesContext } from "../../Providers/FavoritesContext";

import { Link } from "react-router-dom";
export const PlakateList = () => {
  const { category_id } = useParams();
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);

  const { favorites, handleToggleFavorite } = useContext(FavoritesContext);

  const getPosters = async () => {
    if (supabase) {
      setLoading(true);
      const { data, error } = await supabase
        .from("genreposterrel")
        .select("*, poster(*), genres(*)")
        .eq("genre_id", category_id);
      if (error) {
        console.error("Error fetching posters", error);
      } else {
        setPosters(data);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosters();
  }, [category_id]);

  const isFavorite = (item) => {
    return favorites.some((fav) => fav.id === item.id);
  };

  return (
    <PlakateListStyled>
      <div>
        {loading ? <p>Loading...</p> : ""}
        <div>
          <h3>
            {posters.length > 0
              ? `${posters[0].genres.title} - ${posters.length}`
              : ""}
          </h3>
        </div>
        <PosterList>
          {posters &&
            posters.map((posterItem) => {
              const isFav = isFavorite(posterItem.poster);
              console.log(isFav);

              return (
                <PosterItem key={posterItem.poster.id}>
                  <figure>
                    <Link
                      to={`/PlakaterPage/${category_id}/${posterItem.poster.id}`}
                    >
                      <img
                        src={posterItem.poster.image}
                        alt={posterItem.poster.name}
                      />
                    </Link>
                    <figcaption>
                      <PosterDetails>
                        <p> {posterItem.poster.name}</p>
                        <p>kr.{posterItem.poster.price},00</p>
                      </PosterDetails>
                      <BtnContainer>
                        <button>Læg i kurv</button>
                        <button
                          onClick={() =>
                            handleToggleFavorite(posterItem.poster)
                          }
                        >
                          {isFav ? (
                            <img src={heartsolid} alt="heart-solid" />
                          ) : (
                            <img src={heartregular} alt="heart-regular" />
                          )}
                        </button>
                      </BtnContainer>
                    </figcaption>
                  </figure>
                </PosterItem>
              );
            })}
        </PosterList>
      </div>
    </PlakateListStyled>
  );
};
