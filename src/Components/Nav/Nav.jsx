import { NavStyled } from "../../Styled/Nav.styled";
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <NavStyled>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </NavStyled>
    );
};