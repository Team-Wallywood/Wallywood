import styled from "styled-components";

export const LoginStyled = styled.div`
  margin: 2rem 2rem;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  label {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 14rem;
    margin-top: 2px;
    padding: 0.5rem;
    border-radius: 0;
    border-top: 1px solid ${(props) => props.theme.color.borderRed};
    outline: none;

    background-color: #5c1f060a;

    border-left: none;
    border-right: none;
    border-bottom: none;
    &::placeholder {
      color: #bbb;
    }
  }

  h1 {
    color: #d97852;
  }
`;

export const LoginContainer = styled.div`
  margin: 0.5rem 0;
`;

export const LoginBtnContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    width: 6.8rem;
    background-color: ${(props) => props.theme.color.btnSkin};
    padding: 0.5rem;
    border: 1px solid #524641;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const LoginLink = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  gap: 0.5rem;
  a {
    color: #4088ad;
    text-decoration: none;
  }
`;
