import { NavbarStyled } from "./Navbar.Styled";
import { NavLink } from "react-router-dom";
import { HomePage } from "../../Pages/HomePage/HomePage";
import { PlakaterPage } from "../Pages/PlakaterPage/PlakaterPage";
import { OmOsPage } from "../Pages/OmOsPage/OmOsPage";
import { KontaktOsPage } from "../Pages/KontaktOsPage/KontaktOsPage"
import { LoginPage } from "../Pages/LoginPage/LoginPage"

export const Navbar = () =>{
    return(
        <NavbarStyled>
            <ul>
                <li>
                <NavLink to={HomePage}>Forside</NavLink>
                </li>
                <li>
                <NavLink to={PlakaterPage}>Plakater</NavLink>
                </li>
                <li>
                <NavLink to={OmOsPage}>Om os</NavLink>
                </li>
                <li>
                <NavLink to={KontaktOsPage}>Kontakt os</NavLink>
                </li>
                <li>
                <NavLink to={LoginPage}>Login</NavLink>
                </li>
            </ul>

        </NavbarStyled>
    )
}