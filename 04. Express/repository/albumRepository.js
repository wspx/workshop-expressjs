const db = require('../db/database');

class AlbumRepository {
  async getAllAlbums() {
    return await db.raw("SELECT a.AlbumId, a.Title FROM Albums a");
  }

  async getAlbumById(idAlbum) { 
    return await db.raw("SELECT a.AlbumId, a.Title FROM Albums a WHERE a.AlbumId = ?", [idAlbum])
  }

  async getAllMusicFromAlbumId(idAlbum) { 
    return await db.raw(`
      SELECT 
        t.TrackId,
        t.Name,
        a.Title as AlbumTitle,
        t.Composer,
        m.Name as MediaType,
        t.UnitPrice
      FROM Tracks t 
      INNER JOIN Albums a ON t.AlbumId = a.AlbumId
      INNER JOIN Media_Types m ON t.MediaTypeId = m.MediaTypeId
      WHERE t.AlbumId = ?
    `, [idAlbum]);
  }
}

module.exports = new AlbumRepository();