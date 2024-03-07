import { useEffect, useState } from "react";
import { useUserContext } from "../contextes/UserContext";

export default function Inscription() {
  const { validationService, messageBack, create, setMessageBack } =
    useUserContext();
  const [message, setMessage] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const handleChange = async (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleInscription = async () => {
    if (
      validationService.validatePassword(credentials.password) &&
      validationService.validateName(credentials.firstname) &&
      validationService.validateName(credentials.lastname) &&
      credentials.firstname.length >= 2 &&
      credentials.lastname.length >= 2
    ) {
      setMessage("");
      await create({
        email: credentials.email,
        password: credentials.password,
        firstname: credentials.firstname,
        lastname: credentials.lastname,
      });
    } else {
      setMessage("Nom, prénom ou mot de passe pas compatibles");
    }
  };
  useEffect(() => {
    setMessage("");
    setMessageBack("");
  }, []);

  return (
    <div className="">
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <label htmlFor="firstname">firstname</label>
        <input
          id="firstname"
          name="firstname"
          type="firstname"
          value={credentials.firstname}
          onChange={handleChange}
        />
        <label htmlFor="lastname">lastname</label>
        <input
          id="lastname"
          name="lastname"
          type="lastname"
          value={credentials.lastname}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <div>
          <button onClick={handleInscription}>Inscription</button>
        </div>
        <div>{message ?? ""}</div>
        <div>{messageBack ?? ""}</div>
      </div>
      <div></div>
    </div>
  );
}
