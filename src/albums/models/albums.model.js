const mysql = require('mysql2')

class AlbumModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER, 
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    async getAlbums() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM album')
            return result[0]
        }
        catch(error) {
            throw error
        }
    }

    async getAlbum(albumId) {
        try {
            const result = await this.connection.promise().query('SELECT * FROM album WHERE id = ?', [albumId])
            return result[0][0]
        }
        catch(error) {
            throw error
        }
    }

    async addAlbum(album) {
        try {
            const result = await this.connection.promise().query('INSERT INTO album (title, genre, picture, artist) VALUES (?,?,?,?)', [album.title, album.genre, album.picture, album.artist])
            return result[0].insertId
        }
         
        catch(error) {
            throw error
        }
    }
    async updateAlbum(album){
        // console.log(albumId)

        try {
            const result = await this.connection.promise().query('UPDATE album SET title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?',
             [album.title, album.genre, album.picture, album.artist, album.id])
             console.log(album)
             console.log(album.id)
            return result [0] 
            // [0].insertId
        }
        catch(error) {
            throw error
        }
    }
    async deleteAlbum(albumId) {
        try {
            const result = await this.connection.promise().query('DELETE FROM album WHERE id = ?', [albumId])
            return result 
        }
        catch(error) {
            throw error
        }
    }
}

module.exports = new AlbumModel()