import { NavbarStyled } from "./Navbar.Styled";
import { NavLink } from "react-router-dom";

export const Navbar = () =>{
    return(
        <NavbarStyled>
            <ul>
                <li>
                <NavLink to={"/"}>Forside</NavLink>
                </li>
                <li>
                <NavLink to={"/PlakaterPage"}>Plakater</NavLink>
                </li>
                <li>
                <NavLink to={"/OmOsPage"}>Om os</NavLink>
                </li>
                <li>
                <NavLink to={"/KontaktOsPage"}>Kontakt os</NavLink>
                </li>
                <li>
                <NavLink to={"/LoginPage"}>Login</NavLink>
                </li>
            </ul>

        </NavbarStyled>
    )
}