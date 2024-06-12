const AlbumRepository = require('../repository/albumRepository');

class AlbumService {

  constructor() {}

  async getAllAlbums() {
    return await AlbumRepository.getAllAlbums();
  }

  async getAlbumById(idAlbum) { 
    const result = await AlbumRepository.getAlbumById(idAlbum)
    return result[0];
  }

  async getAllMusicFromAlbumId(idAlbum) { 
    return await AlbumRepository.getAllMusicFromAlbumId(idAlbum);
  }
}

module.exports = new AlbumService();