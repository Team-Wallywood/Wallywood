import styled from "styled-components";

export const NavStyled = styled.nav`
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-bottom: 1rem;

    ul {
        list-style-type: none;
        padding: 0;

        li {
            display: inline;
            margin-right: 1rem;

            a {
                color: white;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
                &.active {
                    text-decoration: underline;
                }
        }
    }
}`;