import { createContext,useContext,useState,useEffect } from "react"
import supabase from "../Utils/SupabaseClient"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user,setUser] = useState({});
    console.log("Provider: ",user);
    

    useEffect(()=>{
        const getUser = async ()=>{
            const userStatus = await supabase.auth.getUser()
            if (userStatus) {
                setUser(userStatus)
            }
        }
        getUser()
    },[])

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )

}
export const useAuth = () => useContext(AuthContext)