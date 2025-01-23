import styled from "styled-components";

export const ContainerStyled = styled.section`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.$bgcolor || "transparent"};
  margin: auto auto;

  &.center {
    width: 1200px;
  }
`;
