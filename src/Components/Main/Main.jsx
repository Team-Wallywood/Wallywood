import { MainStyled } from "../../Styled/Main.styled";

export const Main = ({ children }) => {
    return (
        <MainStyled>
            {children}
        </MainStyled>
    );
};