import styled from "styled-components";

export const MainCardsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  margin: auto;

  div:first-of-type {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 8px;
  }

  figcaption {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;

    article {
      margin-top: 1rem;
      font-size: 1rem;
      line-height: 1.5;
    }

    p:last-of-type {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1rem;
      font-size: 0.9rem;
    }

    div {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;

      button:first-of-type {
        padding: 0.5rem 1rem;
      }

      button:last-of-type {
        width: 50px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  button {
    background-color: ${(props) => props.theme.color.btnSkin};
    border: 1px solid #524641;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    a {
      text-decoration: none;
      color: #000;
    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
