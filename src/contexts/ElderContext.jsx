import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getEldersInfo } from "../services/UserService";


import { UserContext } from "./UserContext"
export const ElderContext = createContext();

export function ElderContextProvider({ children }) {
  const [elders, setElders] = useState(null)
  const { user } = useContext(UserContext);
  
  const getElders = useCallback(() => {
    return getEldersInfo().then((response) => setElders(response))  ;
  },[]);

  const value = {
    getElders,
    elders
  }
  
  useEffect(() => {
    if (user) {
      getElders()
    }

  }, [getElders, user]);

  

  return <ElderContext.Provider value={value}>{children}</ElderContext.Provider>;
}
