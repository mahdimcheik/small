import FavoriteManager from "../mangers/FavoriteManager.js";

class FavoriteController {
  static async read(req, res) {
    try {
      const { email } = req.params;
      const result = await FavoriteManager.read(email);
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      res.status(401).json({ message: "Demande refusée" });
    }
  }
}
export default FavoriteController;
