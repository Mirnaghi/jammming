let accessToken;
const clientID = '73dc0e644c494bacb771c7f094da702f';
const redirectURI = 'http://localhost:3000/'

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        // get access_token and expire_date match from URL
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expireDateMatch = window.location.href.match(/expires_in=([^&]*)/);

        // check if access_token and expire_date are in the URL
        if (accessTokenMatch && expireDateMatch) {
            accessToken = accessTokenMatch[1];
            const expireDate = Number(expireDateMatch[1]);

            // set accessToken till expireDate
            window.setTimeout(() => accessToken = '', expireDate * 1000);
            // set accessToken to null after expireDate
            window.history.pushState(accessToken, null, '/');
            return accessToken;
        } else {
            let accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessURL;
        }
    },

    search(term) {
        let accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
            {
                headers: { Authorization: `Bearer ${accessToken}` }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (!jsonResponse.tracks) {
                    return [];
                }

                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }))
            });
    },

    savePlaylist(playlistName, trackURIs) {

        if (!playlistName || !trackURIs.length) {
            return;
        }

        let access_token = Spotify.getAccessToken();
        let headers = {
            Authorization: `Bearer ${access_token}`
        };
        let userID;
        let playlistID;

        // get user id
        fetch('https://api.spotify.com/v1/me', { headers: headers }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            userID = jsonResponse.id
            // get playlist id
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                headers: headers,
                method: "POST",
                body: JSON.stringify({name: playlistName})
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                playlistID = jsonResponse.id
                // add tracks to playlist
                return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                    headers: headers,
                    method: "POST",
                    body: JSON.stringify({ uris: trackURIs})
                });
            });
        });


    }
};




export default Spotify;
