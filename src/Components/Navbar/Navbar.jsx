import { NavbarStyled } from "./Navbar.Styled";
import { NavLink } from "react-router-dom";

export const Navbar = () =>{
    return(
        <NavbarStyled>
            <ul>
                <li>
                <NavLink to={"/"}>navlink</NavLink>
                </li>
                <li>
                <NavLink to={"/"}>navlink</NavLink>
                </li>
                <li>
                <NavLink to={"/"}>navlink</NavLink>
                </li>
                <li>
                <NavLink to={"/"}>navlink</NavLink>
                </li>
                <li>
                <NavLink to={"/"}>navlink</NavLink>
                </li>
            </ul>

        </NavbarStyled>
    )
}