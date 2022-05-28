const express = require('express');
const albumsRouter = require('./albums/albums.routes')
const tracksRouter = require('./albums/tracks.route')
const app = express();
app.use(express.json())
app.use('/albums', albumsRouter)
app.use('/tracks', tracksRouter)
// Please keep this module.exports app, we need it for the tests !
module.exports = app;
