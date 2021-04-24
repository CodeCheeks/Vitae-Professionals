import { createContext, useEffect, useState } from "react";
import { getEldersInfo } from "../services/UserService";


export const ElderContext = createContext();

export function ElderContextProvider({ children }) {
  const [elders, setElders] = useState(null)
  
  const getElders = () => {
    return getEldersInfo().then((response) => setElders(response))  ;
  };

  const value = {
    getElders,
    elders
  }
  
  useEffect(() => {
      getElders()
  }, [ setElders]);

  ;

  return <ElderContext.Provider value={value}>{children}</ElderContext.Provider>;
}
