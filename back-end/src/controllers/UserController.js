import UserManager from "../mangers/UserManager.js";
class UserController {
  static async browse(req, res) {
    try {
      const result = await UserManager.browse();
      console.log(result);
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
    } catch (error) {
      res.status(401).json({ message: "Demande refusée" });
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.params;

      const result = await UserManager.login(email, password);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(401).json({ message: "Mauvais identifiants" });
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
      const { email } = req.params;
      const result = await UserManager.delete(email);
      res.status(202).json({ affectedRows: result.affectedRows });
    } catch (error) {
      res.status(401).json({ message: `Demande refusée: ${error.message}` });
    }
  }
  static async update(req, res) {
    try {
      const { email } = req.params;
      const props = req.body;
      const affectedRows = await UserManager.update(email, props);
      res.status(202).json({ affectedRows });
    } catch (error) {
      res
        .status(401)
        .json({ message: `Mise à jour refusée : ${error.message}` });
    }
  }
}
export default UserController;
