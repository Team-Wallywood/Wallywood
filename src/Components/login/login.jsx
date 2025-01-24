
import { useState, useEffect } from "react";
import { LoginStyled } from "./login.styled";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");

  useEffect(() => {
    if (email.length > 0 && email.length < 2) {
      setUserError("Email must be at least 2 characters");
    } else {
      setUserError("");
    }
  }, [email]);

  useEffect(() => {
    if (password.length > 0 && password.lenth > 5) {
        setUserError("password must be at least 5 characters")
    } else {
        setUserError("");
    }
  }, [password]);

  return (
    <>
    <LoginStyled>
      <h1>Login</h1>
      <form>
      <b>{userError}</b>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <b>{userError}</b>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </form>
            <div>
            <button>Login</button>
            <button>anuller</button>
            </div>
             <a href="#">glemt adgangskode</a>
             <a href="#">Opret profil</a>
    </LoginStyled>
    </>
)};