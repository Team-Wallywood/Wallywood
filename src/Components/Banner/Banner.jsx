import { BannerStyled } from "./Banner.Styled";

import bannerImage from "../../Assets/Images/curtain.jpg";


export const Banner = () => {
    return (
        <BannerStyled>
            <img src={bannerImage} alt="Banner" />
        </BannerStyled>
    )
}