import { useState } from "react";
import { useUserContext } from "../contextes/UserContext";

export default function User() {
  const { login, validationService, messageBack } = useUserContext();
  const [message, setMessage] = useState("");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleChange = async (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    if (
      validationService.validateEmail(credentials.email) &&
      validationService.validatePassword(credentials.password)
    ) {
      await login(credentials);
      setMessage("");
    } else {
      setMessage("Email ou password non conformes");
    }
  };
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={credentials.email}
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
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>{message ?? ""}</div>
      <div>{messageBack ?? ""}</div>
    </div>
  );
}
