import axios from "axios";

class SpotifyClient {
    static async initialize() {
        const res = await axios.post("https://accounts.spotify.com/api/token",
            {
                grant_type: "client_credentials",
                client_id: import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID,
                client_secret: import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );

        let spotify = new SpotifyClient();
        spotify.token = res.data.access_token;
        return spotify;
    }

    async getPopularSongs() {
        const res = await axios.get(
            "https://api.spotify.com/v1/playlists/5SLPaOxQyJ8Ne9zpmTOvSe",
            {
                headers: {
                    "Authorization": "Bearer " + this.token,
                }
            }
        );
        return res.data.tracks;
    }

    async searchSongs(keyword, limit, offset) {
        const res = await axios.get(
            "https://api.spotify.com/v1/search",
            {
                headers: {
                    "Authorization": "Bearer " + this.token,
                },

                params: {
                    q: keyword, type: "track", limit, offset
                }
            }
        );
        return res.data.tracks;
    }
}

export const spotify = await SpotifyClient.initialize();