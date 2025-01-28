import styled from "styled-components";

export const HeaderStyled = styled.header`
  grid-area: header;
  font-family: "Titillium Web", sans-serif;
  color: #d97852;
  font-size: 2rem;
  font-weight: bold;
  margin-left: 2rem;
  line-height: 4.5rem;
  border-bottom: 1px solid ${(props) => props.theme.color.borderRed};
`;
