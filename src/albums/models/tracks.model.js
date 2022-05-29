const mysql = require('mysql2')

class TrackModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER, 
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    async getTracks() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM track')
            return result[0]
        }
        catch(error) {
            throw error
        }
    }

    async getTrack(trackId) {
        try {
            const result = await this.connection.promise().query('SELECT * FROM track WHERE id = ?', [trackId])
            return result[0][0]
        }
        catch(error) {
            throw error
        }
    }

    async addTrack(track) {
        try {
            const result = await this.connection.promise().query('INSERT INTO track (title, youtube_url, id_album) VALUES (?,?,?)', 
            [track.title, track.youtube_url, track.id_album])
            return result[0].insertId
        }
         
        catch(error) {
            throw error
        }
    }
    async updateTrack(track){
        // console.log(albumId)

        try {
            const result = await this.connection.promise().query('UPDATE track SET title = ?, youtube_url = ?, id_album = ? WHERE id = ?',
            [track.title, track.youtube_url, track.id_album, track.id])
            //  console.log(album)
            //  console.log(album.id)
            return result [0] 
            // [0].insertId
        }
        catch(error) {
            throw error
        }
    }
    async deleteTrack(trackId) {
        try {
            const result = await this.connection.promise().query('DELETE FROM track WHERE id = ?', [trackId])
            return result 
        }
        catch(error) {
            throw error
        }
    }
}

module.exports = new TrackModel()