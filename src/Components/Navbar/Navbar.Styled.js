import styled from "styled-components";

export const NavbarStyled = styled.nav`
  grid-area: navbar;
  display: flex;
  ul{
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0 10px;
      a{
        text-decoration: none;
        color: #000;
      }
    }
  }
`;
