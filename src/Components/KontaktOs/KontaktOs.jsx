import { useState, useEffect } from "react";
import { KontaktOsStyled } from "./KontaktOs.Styled";

export const Kontaktos = () => {
  const [navn, setNavn] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [userError, setUserError] = useState("");

  useEffect(() => {
    if (navn.length > 0 && navn.length < 2) {
      setUserError("Email must be at least 2 characters");
    } else {
      setUserError("");
    }
  }, [navn]);

  useEffect(() => {
    if (email.length > 0 && email.lenth > 5) {
        setUserError("password must be at least 5 characters")
    } else {
        setUserError("");
    }
  }, [email]);

  useEffect(() => {
    if (text.length > 0 && text.lenth > 10) {
        setUserError("password must be at least 10 characters")
    } else {
        setUserError("");
    }
  }, [text]);

  return (
    <>
    <KontaktOsStyled>
      <h1>Kontakt Os</h1>
      <form>
      <b>{userError}</b>
        <label>
          Navn:
          <input type="navn" value={navn} onChange={(e) => setNavn(e.target.value)} />
        </label>
        <b>{userError}</b>
        <label>
          email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <b>{userError}</b>
        <label>
            Din besked:
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
      </form>
            <div>
            <button>Send</button>
            <button>anuller</button>
            </div>
    </KontaktOsStyled>
    </>
)};