class AlbumMiddleware {
  checkAlbum(req, res, next) {
    if (req.body && req.body.title) {
      next();
    } else {
      res.status(400).send({ message: 'Title is not properly set' });
    }
  }
}

module.exports = new AlbumMiddleware();
