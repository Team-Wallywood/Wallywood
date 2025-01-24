import styled from "styled-components";

export const PlakateDetailsStyled = styled.div`
  figure {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 2rem;

    @media screen and (min-width: ${(props) =>
        props.theme.grid.breakpoints.m}) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: ${(props) =>
        props.theme.grid.breakpoints.l}) {
      grid-template-columns: 1fr 1fr;
    }
  }
  width: 100%;
  margin: 1rem 0;
  img {
    width: 100%;
    height: 600px;
    display: block;
  }
  figcaption {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    margin: 0.5rem 0;
  }
`;

export const PlakatePrice = styled.div`
  font-weight: bold;
  p {
    font-size: 1.5rem;
  }
`;

export const PlakateDescription = styled.div``;

export const PlakateImage = styled.div``;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    background-color: ${(props) => props.theme.color.btnSkin};
    border: 1px solid #524641;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    a {
      text-decoration: none;
      color: #000;
    }
    img {
      width: 20px;
    }
  }

  button:last-of-type {
    width: 50px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;
