const { getMaxListeners } = require('../../app');
const trackModel = require('../models/tracks.model');

class TrackController {
  async listTracks(req, res) {
    try {
      const tracks = await trackModel.getTracks();
      res.status(200).send(tracks);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async getTrack(req, res) {
    try {
      const track = await trackModel.getTrack(req.params.id);
      res.status(200).send(track);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async addTrack(req, res) {
    try {
      const newTrack = {
        ...req.body,
      };

      const trackId = await trackModel.addTrack(req.body);
      // console.log(trackId);
      newTrack.id = trackId;
      res.status(201).send(newTrack);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async updateTrack(req, res) {
    try {
      const newTrack = {
        ...req.body,
      };
      const track = await trackModel.updateTrack(newTrack);
      res.status(200).send(track);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async deleteTrack(req, res) {
    try {
      const track = await trackModel.deleteTrack(req.params.id);
      res.status(200).send(track);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

module.exports = new TrackController();