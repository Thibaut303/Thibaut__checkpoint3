// const { response } = require('express')
const { getMaxListeners } = require('../../app');
const albumModel = require('../models/albums.model');

class AlbumController {
  async listAlbums(req, res) {
    try {
      const albums = await albumModel.getAlbums();
      res.status(200).send(albums);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async getAlbum(req, res) {
    try {
      const album = await albumModel.getAlbum(req.params.id);
      res.status(200).send(album);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async addAlbum(req, res) {
    try {
      const newAlbum = {
        ...req.body,
      };

      const albumId = await albumModel.addAlbum(req.body);
    //   console.log(albumId);
      newAlbum.id = albumId;
      res.status(201).send(newAlbum);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async updateAlbum(req, res) {
    try {
      const newAlbum = {
        ...req.body,
      };
      const album = await albumModel.updateAlbum(newAlbum);
      res.status(200).send(album);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async deleteAlbum(req, res) {
    try {
      const album = await albumModel.deleteAlbum(req.params.id);
      res.status(200).send(album);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

module.exports = new AlbumController();
