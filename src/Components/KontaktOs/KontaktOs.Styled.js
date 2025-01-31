import styled from "styled-components";

export const KontaktOsStyled = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin: 2rem;
label{
    display: flex;
    flex-direction: column;
    margin:  0.5rem 0;
}
input{
    width: 20rem;
    background-color: #5C1F060A;
    border: none;
    border-top: 1px solid ${(props) => props.theme.color.btnSkin};
    padding: 0.5rem;
}
textarea{
    width: 20rem;
    height: 10rem;
    background-color: #5C1F060A;
    resize: none;
    border: 3rem;
    border-top: 1px solid ${(props) => props.theme.color.btnSkin};
    padding: 0.5rem;
}

button{
    width: 8rem;
    height: 2rem;
    background-color: #D1B3A7;
    border-width: 1px;
    margin: 1rem;
    border-radius: 5px;
}
h1{
    color: #D97852;
}
`;
