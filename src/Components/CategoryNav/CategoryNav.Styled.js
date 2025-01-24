import styled from "styled-components";

import { ResetList } from "../../Styles/Mixins";

export const CategoryNavStyled = styled.aside`
  width: 100%;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.color.borderRed};
  ul {
    li:first-of-type {
      font-weight: bold;
    }
    ${ResetList}
    margin: 0.5rem 0;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.color.black};
    }
  }
`;
