import styled from "styled-components";

export const BasketModalStyled = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      display: flex;
      gap: 1rem;
      padding: 1rem 10px;
      border: 1px solid ${(props) => props.theme.color.borderRed};
      border-radius: 0.5rem;
    }
    button {
      width: 1.5rem;
      background-color: ${(props) => props.theme.color.btnSkin};
      border: 1px solid #524641;
      border-radius: 5px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const ModalHeaderClose = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  button {
    background-color: ${(props) => props.theme.color.btnSkin};
    border: 1px solid #524641;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    &:hover {
      cursor: pointer;
    }
  }
  h2 {
    color: ${(props) => props.theme.color.orange};
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;
