import { LoginStyled } from "./login.styled";



export const Login = () =>{
    return(
        <LoginStyled>
            <h1>Login</h1>
            <input type="text" />
            <input type="text" />
            <button>Login</button>
            <button>anuller</button>
            <a href="#">glemt adgangskode</a>
            <a href="#">Opret profil</a>
        </LoginStyled>
    )
}