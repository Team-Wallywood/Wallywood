import { PlakateDetailsStyled,ButtonDiv,PlakateImage,PlakatePrice,PlakateDescription } from "./PlakateDetails.Styled";

import { useParams } from "react-router-dom";
import supabase from "../../Utils/SupabaseClient";
import { useEffect, useState } from "react";

import heart from "../../Assets/Button/heart-regular.svg";

export const PlakateDetails = () => {

    const { plakate_id } = useParams();
    console.log(plakate_id);

    const [poster, setPoster] = useState();
    const [loading, setLoading] = useState(true);

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

      useEffect(()=>{
            fetchPoster();            
      },[plakate_id]);

      console.log(poster);

        if(loading){
            return <p>Loading...</p>
        }
      
        if(!poster){
            return <p>Poster not found</p>
        }

      const {name, description, price,image, width, height,id, genreposterrel} = poster;

      

    return (
        <PlakateDetailsStyled>
            <figure>
                <PlakateImage>
                <img src={image} alt={name}/>
                </PlakateImage>
                <figcaption>
                    <h3>{name}</h3>
                    <PlakateDescription dangerouslySetInnerHTML={{ __html: description }} />
                    <p>Størrelse: {width} x {height} cm</p>
                    <p>Varenummer (sku): {id}</p>
                    <PlakatePrice>
                        <p>Pris: {price},00 DKK</p>
                    </PlakatePrice>
                    <ButtonDiv>
                    <button>
                        Læg i kurv
                    </button>
                      <button>
                        <img src={heart} alt="heart-svg" />
                      </button>
                    </ButtonDiv>
                </figcaption>
            </figure>
            
        </PlakateDetailsStyled>
    );
}