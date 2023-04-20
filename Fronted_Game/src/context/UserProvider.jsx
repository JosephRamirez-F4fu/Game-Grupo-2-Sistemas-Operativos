import { createContext,useContext,useState} from "react"

/*Cargo mi peticiones desde la api */

/* imporoto contexto de user context*/

import {UserContext} from "./UserContext"



export default UseUser=()=>{
    const context = useContext(UserContext);
    if(context==undefined){
        throw new Error("useUserContext must be used within a UserContextProvider");
    };
    return context;
};


export const UserContextProvider = ({ children })=>{
    const [user,setUser] = useState({});
    return (    
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
};