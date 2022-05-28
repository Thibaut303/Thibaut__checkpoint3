const express = require('express');
 
const trackController = require('./controllers/tracks.controller');

const router = express.Router();

 

router.get('/', trackController.listTracks);
router.get('/:id', trackController.getTrack);
router.post('/', trackController.addTrack);
router.put('/', trackController.updateTrack);
router.delete('/:id', trackController.deleteTrack);

module.exports = router;