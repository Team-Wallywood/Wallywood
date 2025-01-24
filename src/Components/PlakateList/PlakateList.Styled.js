import styled from "styled-components";

import { ResetList } from "../../Styles/Mixins";

export const PlakateListStyled = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: auto;
`;

export const PlakateGrid = styled.div`
  display: grid;
  grid-template-columns: 0.15fr 1fr;
  gap: 1rem;

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.s}) {
    grid-template-columns: 0.3fr 1fr;
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
    grid-template-columns: 0.25fr 1fr;
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.l}) {
    grid-template-columns: 0.15fr 1fr;
  }
`;

export const PosterItem = styled.li`
  width: 100%;
  margin: 1rem 0;
  figure {
    > img {
      width: 100%;
      height: 500px;
      display: block;
    }
    figcaption {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      p:first-of-type {
        font-weight: bold;
      }
    }
  }
`;

export const PosterList = styled.ul`
  ${ResetList}
  display: grid;
  gap: 1rem;
  padding: 0;
  margin: 0 1rem 0 0;

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.s}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.l}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    background-color: ${(props) => props.theme.color.btnSkin};
    border: 1px solid #524641;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
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

export const PosterDetails = styled.div`
  margin: 0.5rem 0;
`;
