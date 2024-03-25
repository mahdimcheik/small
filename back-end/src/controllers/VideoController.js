import VideoManager from "../mangers/VideoManager.js";

class VideoController {
  static async browse(req, res) {
    try {
      const result = await VideoManager.browse();
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json({ message: "Demande refusée" });
    }
  }
  static async read(req, res) {
    try {
      const { id } = req.params;
      const result = await VideoManager.read(id);
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      res.status(401).json({ message: "Demande refusée" });
    }
  }
  static async add(req, res) {
    try {
      const { title, duration } = req.body;
      const result = await VideoManager.add(title, duration);
      res.status(201).json({ affectedRows: result.affectedRows });
    } catch (error) {
      res.status(401).json({ message: `Demande refusée: ${error.message}` });
    }
  }
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await VideoManager.delete(id);
      res.status(202).json({ affectedRows: result.affectedRows });
    } catch (error) {
      res.status(401).json({ message: `Demande refusée: ${error.message}` });
    }
  }
  static async update(req, res) {
    try {
      const { id, title, duration } = req.body;
      const affectedRows = await VideoManager.update(id, title, duration);
      res.status(202).json({ affectedRows });
    } catch (error) {
      res
        .status(401)
        .json({ message: `Mise à jour refusée : ${error.message}` });
    }
  }
}
export default VideoController;
