import styled from "styled-components";

export const NavbarStyled = styled.nav`
  grid-area: navbar;
  display: flex;
  justify-content: center;
  padding: 1rem;
  align-items: end;
  border-bottom: 1px solid ${(props) => props.theme.color.borderRed};
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
    top: 11.5%;

    li {
      margin: 0 10px;
      a {
        text-decoration: none;
        color: #000;
      }
    }
  }
  img {
    width: 20px;
  }
  .active {
    color: ${(props) => props.theme.color.orange};
  }
`;
