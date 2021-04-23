import { createContext, useEffect, useState } from "react";
import { getEldersInfo } from "../services/UserService";


export const ElderContext = createContext();

export function ElderContextProvider({ children }) {
  const [elders, setElders] = useState(null)
  let eldersUpdated = false
  const getElders = () => {
    return getEldersInfo().then((response) => setElders(response)).then(eldersUpdated === true)  ;
  };

  const value = {

    getElders,
    elders
  }

  useEffect(() => {
      getElders()
  }, [setElders, eldersUpdated]);

  ;

  return <ElderContext.Provider value={value}>{children}</ElderContext.Provider>;
}
