import {
  PlakateListStyled,
  PosterItem,
  PosterList,
  BtnContainer,
  PosterDetails,
} from "./PlakateList.Styled";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../../Utils/SupabaseClient";

import heart from "../../Assets/Button/heart-regular.svg";

export const PlakateList = () => {
  const { category_id } = useParams();

  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);

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

  console.log(posters);

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
            posters.map((posterItem) => (
              <PosterItem key={posterItem.poster.id}>
                <figure>
                  <img
                    src={posterItem.poster.image}
                    alt={posterItem.poster.name}
                  />
                  <figcaption>
                    <PosterDetails>
                      <p> {posterItem.poster.name}</p>
                      <p>kr.{posterItem.poster.price},00</p>
                    </PosterDetails>
                    <BtnContainer>
                      <button>Læs mere</button>
                      <button>
                        <img src={heart} alt="heart-svg" />
                      </button>
                    </BtnContainer>
                  </figcaption>
                </figure>
              </PosterItem>
            ))}
        </PosterList>
      </div>
    </PlakateListStyled>
  );
};
