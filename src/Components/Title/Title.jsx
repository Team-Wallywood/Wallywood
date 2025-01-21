import { TitleStyled } from "./Title.Styled";



export const Title = ({ children }) => {
    return(
        <TitleStyled>
            <h1>{children}</h1>
        </TitleStyled>
    )
}