import UserManager from "../mangers/UserManager.js";
import Authentification from "../middlewares/Authentification.js";

class UserController {
  static async browse(req, res) {
    try {
      console.log("triggered");
      const result = await UserManager.browse();
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json({ message: "Demande refusée" });
    }
  }
  static async read(req, res) {
    try {
      const { email } = req.params;
      const result = await UserManager.read(email);
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      res.status(401).json({ message: "Demande refusée" });
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.params;
      const result = await UserManager.login(email, password);
      if (result) {
        const token = await Authentification.generateToken(result);
        res.status(200).json({ ...result, token });
      } else {
        res.status(404).json({ message: "Mauvais identifiants" });
      }
    } catch (error) {
      res.status(401).json({ message: "Mauvais identifiants" });
    }
  }
  static async getProfile(req, res) {
    try {
      const result = await UserManager.read(req.userInfo.email);
      if (result) {
        const token = await Authentification.generateToken(result);
        res.status(200).json({ ...result, token });
      } else {
        res.status(404).json({ message: "Mauvais identifiants" });
      }
    } catch (error) {
      res.status(401).json({ message: "Mauvais identifiants" });
    }
  }
  static async add(req, res) {
    try {
      const { email, firstname, lastname, password } = req.body;
      const result = await UserManager.add(
        email,
        firstname,
        lastname,
        password
      );
      res.status(201).json({ affectedRows: result.affectedRows });
    } catch (error) {
      res.status(401).json({ message: `Demande refusée: ${error.message}` });
    }
  }
  static async delete(req, res) {
    try {
      const email = req.userInfo.email;
      const { password } = req.params;
      const connected = await UserManager.login(email, password);
      if (connected) {
        const result = await UserManager.delete(email);
        res.status(202).json({ affectedRows: result.affectedRows });
      } else
        res
          .status(401)
          .json({ message: `Demande refusée: Mauvais identifiant` });
    } catch (error) {
      res.status(401).json({ message: `Demande refusée: ${error.message}` });
    }
  }
  static async update(req, res) {
    try {
      const email = req.userInfo.email;
      const props = req.body;
      const result = await UserManager.login(email, props.password);
      if (result) {
        const affectedRows = await UserManager.update(email, props);
        res.status(202).json({ affectedRows });
      } else
        res
          .status(401)
          .json({ message: `Mise à jour refusée : Mauvais identifiants` });
    } catch (error) {
      res
        .status(401)
        .json({ message: `Mise à jour refusée : ${error.message}` });
    }
  }
}
export default UserController;
