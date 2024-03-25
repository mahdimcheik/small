import { client } from "../clientDb/client.js";

class FavoriteManager {
  static async read(email) {
    try {
      const [rows] = await client.query(
        `SELECT videos.* , playlists.title as title FROM videos 
        JOIN favorites ON videos.id = favorites.video_id  
        JOIN  playlists ON videos.playlist_id = playlists.id 
        WHERE favorites.user_id = ?`,
        [email]
      );
      return rows;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
}
export default FavoriteManager;
