import {
  PlakateDetailsStyled,
  ButtonDiv,
  PlakateImage,
  PlakatePrice,
  PlakateDescription,
} from "./PlakateDetails.Styled";

import { useParams } from "react-router-dom";
import supabase from "../../Utils/SupabaseClient";
import { useEffect, useState } from "react";

import heartregular from "../../Assets/Button/heart-regular.svg";
import heartsolid from "../../Assets/Button/heart-solid.svg";

import { FavoritesContext } from "../../Providers/FavoritesContext";
import { useContext } from "react";
import { useBasket } from "../../Utils/useBasket";

export const PlakateDetails = () => {
  const { plakate_id } = useParams();
  console.log(plakate_id);

  const [poster, setPoster] = useState();
  const [loading, setLoading] = useState(true);
  const { favorites, handleToggleFavorite } = useContext(FavoritesContext);

  const { basket, handleBasket } = useBasket();

  const fetchPoster = async () => {
    if (supabase) {
      setLoading(true);
      const { data, error } = await supabase
        .from("poster")
        .select("*,genreposterrel(genre_id(*))")
        .eq("id", plakate_id);
      if (error) {
        console.error("Error fetching posters", error);
      } else {
        setPoster(data[0]);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPoster();
  }, [plakate_id]);

  console.log("poster", poster);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!poster) {
    return <p>Poster not found</p>;
  }

  const isFavorite = (item) => {
    return favorites.some((fav) => fav.id === item.id);
  };

  const isFav = isFavorite(poster);

  const { name, description, price, image, width, height, id, genreposterrel } =
    poster;

  return (
    <PlakateDetailsStyled>
      <figure>
        <figcaption>
          <h3>{name}</h3>
          <PlakateDescription
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <p>
            Størrelse: {width} x {height} cm
          </p>
          <p>Varenummer (sku): {id}</p>
          <PlakatePrice>
            <p>Pris: {price},00 DKK</p>
          </PlakatePrice>
          <ButtonDiv>
            <button onClick={() => handleBasket(poster)}>Læg i kurv</button>
            <button onClick={() => handleToggleFavorite(poster)}>
              {isFav ? (
                <img src={heartsolid} alt="heart-solid" />
              ) : (
                <img src={heartregular} alt="heart-regular" />
              )}
            </button>
          </ButtonDiv>
        </figcaption>
        <PlakateImage>
          <img src={image} alt={name} />
        </PlakateImage>
      </figure>
    </PlakateDetailsStyled>
  );
};
