import { useState, useEffect } from "react";
import { KontaktOsStyled } from "./KontaktOs.Styled";

export const Kontaktos = () => {
  const [navn, setNavn] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [userErrorName, setUserErrorName] = useState("");
  const [userErrorEmail, setUserErrorEmail] = useState("")
  const [userErrorBesked, setUserErrorBesked] = useState("")

  useEffect(() => {
    if (navn.length > 0 && navn.length < 2) {
        setUserErrorName("Email must be at least 2 characters");
    } else {
        setUserErrorName("");
    }
  }, [navn]);

  useEffect(() => {
    if (email.length > 0 && email.length <  5) {
        setUserErrorEmail("password must be at least 5 characters")
    } else {
        setUserErrorEmail("");
    }
  }, [email]);

  useEffect(() => {
    if (text.length > 0 && text.length < 10) {
        setUserErrorBesked("password must be at least 10 characters")
    } else {
        setUserErrorBesked("");
    }
  }, [text]);

  return (
    <>
    <KontaktOsStyled>
      <h1>Kontakt Os</h1>
      <form>
      <b>{userErrorName}</b>
        <label>
          Navn:
          <input type="navn" value={navn} onChange={(e) => setNavn(e.target.value)} />
        </label>
        <b>{userErrorEmail}</b>
        <label>
          email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <b>{userErrorBesked}</b>
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