import { useState } from "react";
import { useUserContext } from "../contextes/UserContext";

export default function UserUpdate() {
  const { validationService, messageBack, update, deleteUser } =
    useUserContext();
  const [message, setMessage] = useState("");
  const [credentials, setCredentials] = useState({
    password: "",
    firstname: "",
    lastname: "",
  });
  const handleChange = async (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleUpdate = async () => {
    if (
      validationService.validatePassword(credentials.password) &&
      validationService.validateName(credentials.firstname) &&
      validationService.validateName(credentials.lastname) &&
      credentials.firstname.length >= 2 &&
      credentials.lastname.length >= 2
    ) {
      setMessage("");
      await update({
        password: credentials.password,
        firstname: credentials.firstname,
        lastname: credentials.lastname,
      });
    } else {
      setMessage("Nom, prénom ou mot de passe pas compatibles");
    }
  };
  const handleDelete = async () => {
    if (validationService.validatePassword(credentials.password)) {
      setMessage("");
      const res = await deleteUser(credentials.password);
      if (res) {
        setMessage("account deleted");
      } else {
        setMessage("failed");
      }
    } else {
      setMessage("mot de passe pas compatible");
    }
  };

  return (
    <div className="">
      <div>
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
          <button onClick={handleUpdate}>Update</button>
        </div>
        <div>{message ?? ""}</div>
        <div>{messageBack ?? ""}</div>
      </div>

      <div>
        <h2>delete</h2>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
