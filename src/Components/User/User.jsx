import { UserStyled } from "./User.Styled";

import { useContext,useEffect,useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import { useNavigate,useLocation } from "react-router-dom";

import supabase from "../../Utils/SupabaseClient";

import userLoginSvg from "../../Assets/User/profileUser.svg";
import userLoginSvgClose from "../../Assets/User/profileUser-close.svg";

export const User = () =>{
    const {user,setUser} = useContext(AuthContext);
    console.log("Provider: ",user);

    const handleLogout = async () => {
        try {
            const {error} = await supabase.auth.signOut();
            if (error) throw error;
            setUser(null);
        } catch (error) {
            console.error("An unexpected error occurred:", error);
        }
    }

    const navigate = useNavigate();
    const location = useLocation();


    const handlelogin = () =>{
        if (location.pathname === "/LoginPage") {
            return;
        }else{
            navigate("/LoginPage");
        }
    }

    return(
        <UserStyled>
            {user && user.data && user.data.user ?(
                <>
                <img src={userLoginSvg} alt="User" onClick={() => handleLogout()}/>
                </>
            ):(
                <>
                <img src={userLoginSvgClose} alt="User" onClick={() =>handlelogin() }/>
                </>
            )}

        </UserStyled>
    )
}