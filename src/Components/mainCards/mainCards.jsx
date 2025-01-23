import {
  MainCardsStyled,
  ButtonContainer,
  CardsContainer,
  ImageContainer,
} from "./mainCards.Styled";

import { useEffect, useState } from "react";
import supabase from "../../Utils/SupabaseClient";

import heart from "../../Assets/Button/heart-regular.svg";

import { Title } from "../Title/Title";

export const MainCards = () => {
  const [poster, setPoster] = useState([]);

  const getPoster = async () => {
    if (supabase) {
      const { data, error } = await supabase
        .from("poster")
        .select("*, genreposterrel(genre_id(title))")
        .limit(4);
      if (error) {
        console.error("Error fetching poster", error);
      } else {
        setPoster(data);
      }
    }
  };

  useEffect(() => {
    getPoster();
  }, [setPoster, supabase]);

  console.log(poster);

  return (
    <MainCardsStyled>
      <div>
        <Title>Fire tilfældige...</Title>
      </div>

      <CardsContainer>
        {poster &&
          poster.map((poster, index) => {
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
                    <button>Læs mere</button>
                    <button>
                      <img src={heart} alt="heart-svg" />
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
