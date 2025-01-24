import { HeaderStyled } from "./Header.Styled";
import  Banner  from "../../Assets/Images/curtain.jpg"


export const Header = () =>{
    return(
        <HeaderStyled>
            <h1>Wallywood</h1>
            <img src={Banner} alt="Banner" />
        </HeaderStyled>
    )
}