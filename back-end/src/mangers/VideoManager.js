import { client } from "../clientDb/client.js";

class VideoManager {
  static async browse() {
    try {
      const [rows] = await client.query(`select * from videos`);
      return rows;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
  static async read(id) {
    try {
      const [rows] = await client.query(`select * from videos where id = ?`, [
        id,
      ]);
      return rows[0];
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }

  static async add(title, duration) {
    try {
      const [result] = await client.query(
        `insert into videos (title, duration) values (? , ?)`,
        [title, duration]
      );
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async delete(id) {
    try {
      const [result] = await client.query(`delete from videos WHERE id = ?`, [
        id,
      ]);
      return result;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
  static async update(id, title, duration) {
    const [res] = await client.query(
      `UPDATE videos set title = ? , duration = ? where id = ?`,
      [title, duration, id]
    );
    return res.affectedRows;
  }
}
export default VideoManager;
