import { FooterStyled} from "./Footer.Styled";

import instagram from "../../Assets/Footer/square-instagram-brands-solid.svg";
import facebook from "../../Assets/Footer/square-facebook-brands-solid.svg";
import twitter from "../../Assets/Footer/square-twitter-brands-solid.svg";
import pinterest from "../../Assets/Footer/square-pinterest-brands-solid.svg";

const ImageArray = [pinterest,instagram, facebook, twitter];

export const Footer = () =>{
    return(
        <FooterStyled>
            <div>
            <ul>
                <li><p>WALLYWOOD</p></li>
                <li><p>Øster Uttrupvej 1</p></li>
                <li><p>9000 Aalborg</p></li>
            </ul>
            <ul>
                <li><p>CVR: 12345678</p></li>
                <li><p>MAIL: info@wallywood.dk</p></li>
                <li><p>MOBIL: +45 9812 3456</p></li>
            </ul>
            </div>
            <div>
            <ul>
                {ImageArray.map((image, index) => {
                    return(
                        <li key={index}><img src={image} alt="social media icon" key={index} /></li>
                    )
                })}
            </ul>
            </div>
        </FooterStyled>
    )
}