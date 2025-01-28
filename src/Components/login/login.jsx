
import { LoginStyled,LoginBtnContainer,LoginLink,LoginContainer } from "./login.styled";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import supabase from "../../Utils/SupabaseClient";
import { useForm } from "react-hook-form";

export const Login = () => {

  const {user,setUser} = useContext(AuthContext);

  
  const {register, handleSubmit, watch,reset, formState: {errors}} = useForm();

  const onSubmit = async ({email, password}) =>{
    try {
      const {user,error} = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log("User loggend in:", await supabase.auth.getUser());
      const myUser = await supabase.auth.getUser();
      setUser(myUser);
      console.log("Provider:login ",user);
      reset();
    } catch (error) {
        console.error("An unexpected error occurred.", error);
    }
  };

  const handleCancel = () => {
    reset();
    console.log("Formularen er blevet nulstillet");
    
  };


  return (
    <>
    <LoginStyled>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <LoginContainer>
        <label htmlFor="email">Din email:</label>
          <input {...register('email',{required: true})} type="email" placeholder="Indtast din email"/>
          {errors.email && <p>Du skal skrive din email</p>}
      </LoginContainer>
        <LoginContainer>
        <label name="password">Din adgangskode:</label>
          <input type="password" {...register('password', {required: true})} placeholder="Indtast din adgangskode"/>
          </LoginContainer>
          <LoginBtnContainer>
          <button type="submit">Login</button>
          <button type="button" onClick={()=> handleCancel()}>Annuller</button>
          </LoginBtnContainer>
          <LoginLink>
            <a href="#">Glemt adgangskode?</a>
            <a href="#">Opret profil</a>
          </LoginLink>
      </form>
    </LoginStyled>
    </>
)};