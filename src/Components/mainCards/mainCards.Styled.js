import styled from "styled-components";

export const MainCardsStyled = styled.div`
  figure {
    display: flex;
  }

  figcaption {
    div {
      display: flex;
      gap: 1rem;
      button:first-of-type {
        padding: 0.5rem;
      }
      button:last-of-type {
        width: 40px;
      }
    }
  }
  button {
    background-color: ${(props) => props.theme.color.btnSkin};
    border: 1px solid #524641;
    padding: 0.2rem;
    width: 100px;
    height: 40px;
    border-radius: 3px;

    img {
      width: 20px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
  }
`;
