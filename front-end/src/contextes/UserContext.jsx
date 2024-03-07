import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ValidationService from "../services/ValidationService";
import { useLoaderData } from "react-router-dom";

const userContext = createContext();
export default function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [messageBack, setMessageBack] = useState("");
  const validationService = new ValidationService();

  async function login(user) {
    try {
      const { data } = await axios.get(
        `http://localhost:3310/users/${user.email}/${user.password}`
      );
      const result = data;
      if (result) {
        validationService.setLocalStorage("token", result.token);
        setUserInfo({ ...data });
        console.info(result);
        axios.defaults.headers.common.Authorization = `Bearer ${result.token}`;
        setMessageBack("");
      }
    } catch (error) {
      setMessageBack("Mauvais identifiants");
    }
  }

  async function logout() {
    try {
      validationService.emptyLocalStorage("token");
      setUserInfo({});
    } catch (error) {
      setMessageBack("Mauvais identifiants");
    }
  }

  const userData = useMemo(
    () => ({
      userInfo,
      setUserInfo,
      login,
      validationService,
      messageBack,
      setMessageBack,
      logout,
    }),
    [userInfo, setUserInfo, messageBack, setMessageBack]
  );
  const userProfil = useLoaderData();

  useEffect(() => {
    if (userProfil) {
      setUserInfo(userProfil);
      console.log("profil", userProfil);
    } else {
      setUserInfo({});
      console.log("profil", userProfil);
    }
  }, []);
  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  );
}
export const useUserContext = () => useContext(userContext);
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
