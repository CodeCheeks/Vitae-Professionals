import { createContext, useEffect, useState } from "react";
import { getEldersInfo, getUserInfo } from "../services/UserService";
import { getAccessToken } from "../store/AccessTokenStore";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [elders, setElders] = useState(null)

  const getUser = () => {
    return getUserInfo().then((response) => setUser(response));
  };

  const getElders = () => {
    return getEldersInfo().then((response) => setElders(response));
  };

  useEffect(() => {
    if (getAccessToken()) {
      getUser()
      getElders()
    }
  }, []);

  const value = {
    getUser,
    getElders,
    user,
    elders
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
