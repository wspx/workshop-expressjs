const AlbumService = require('../services/albumService')

class AlbumController {

  async getAllAlbums(req, res) {
    const result = await AlbumService.getAllAlbums();
    res.send(result);
  }

  async getAlbumById(req, res) { 
    const result = await AlbumService.getAlbumById(req.params.idAlbum);
    res.send(result);
  }

  async getAllMusicFromAlbumId(req, res) { 
    const result = await AlbumService.getAllMusicFromAlbumId(req.params.idAlbum);
    res.send(result);
  }
}

module.exports = new AlbumController();