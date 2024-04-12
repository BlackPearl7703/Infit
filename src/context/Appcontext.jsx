import { createContext, useState } from "react";
export const AppContext =createContext();

export default function AppContextProvider({children})
{
    const [userdata,setuserdata]=useState([]);
    const[reguser,setreguser]=useState(true);
     
    const value={
        userdata,
        setuserdata,
        reguser,
        setreguser,
       
    }

    return <AppContext.Provider value={value}>
    {children}
   </AppContext.Provider>
}
