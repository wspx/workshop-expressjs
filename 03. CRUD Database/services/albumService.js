const AlbumRepository = require('../repository/albumRepository');

module.exports = class AlbumService {

  constructor() {
    this.albumRepository = new AlbumRepository()
  }

  async getAllAlbums() {
    return await this.albumRepository.getAllAlbums();
  }

  async getAlbumById(idAlbum) { 
    const result = await this.albumRepository.getAlbumById(idAlbum)
    return result[0];
  }

  async getAllMusicFromAlbumId(idAlbum) { 
    return await this.albumRepository.getAllMusicFromAlbumId(idAlbum);
  }
}