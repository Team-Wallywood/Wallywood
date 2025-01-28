import styled from "styled-components";

export const UserStyled = styled.div`
  grid-area: user;
  border-bottom: 1px solid ${(props) => props.theme.color.borderRed};
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 1rem;

  img {
    width: 40px;
    &:hover {
      cursor: pointer;
    }
  }
`;
