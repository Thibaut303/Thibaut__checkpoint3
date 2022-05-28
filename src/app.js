const express = require('express');
const albumsRouter = require('./albums/albums.routes')

const app = express();
app.use(express.json())
app.use('/albums', albumsRouter)
// Please keep this module.exports app, we need it for the tests !
module.exports = app;
