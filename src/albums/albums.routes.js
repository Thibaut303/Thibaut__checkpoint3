const express = require('express');
const albumController = require('./controllers/albums.controller');
const albumMiddleware = require('./middlewares/albums.middleware');
 

const router = express.Router();

router.get('/', albumController.listAlbums);
router.get('/:id', albumController.getAlbum);
router.post('/', [albumMiddleware.checkAlbum, albumController.addAlbum]);
router.put('/', [albumController.updateAlbum]);
router.delete('/:id', albumController.deleteAlbum);

 

module.exports = router;
