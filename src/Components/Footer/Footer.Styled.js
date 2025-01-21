import styled from "styled-components";

import { ResetList } from "../../Styles/Mixins";

export const FooterStyled = styled.footer`
  grid-area: footer;
  display: grid;
  margin: 0 1rem;
  border-top: 1px solid ${(props) => props.theme.color.borderRed};

  grid-template-columns: 1.5fr 0.5fr;
  div {
    display: flex;
    gap: 10rem;
  }

  ul {
    ${ResetList}
    padding: 0.6rem 0;
    li {
      padding: 0.2rem;
    }
  }

  div:first-of-type {
    ul {
    }
    ul:first-of-type {
      li:first-child {
        p {
          font-weight: bold;
          color: ${(props) => props.theme.color.orange};
        }
      }
    }
  }

  div:last-of-type {
    justify-content: flex-end;
    ul {
      display: flex;
      justify-content: flex-end;
    }
  }
  img {
    width: 30px;
  }
`;
