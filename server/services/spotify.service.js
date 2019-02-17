const rp = require('request-promise');

let tokenExpiry = -1
let token = null

async function updateOauthToken() {
    console.log('Updating token')
    console.log(process.env.SPOTIFY);
    var options = {
        method: 'POST',
        uri: 'https://accounts.spotify.com/api/token',
        form: {
            grant_type: 'client_credentials'
        },
        headers: {
            // <base64 encoded client_id:client_secret>
            Authorization: 'Basic ' + process.env.SPOTIFY
        },
        json: true
    };
    body = await rp(options)
    console.log('Updated')

    // Set expiry time to be expiry time - 1s to allow time for search
    tokenExpiry = new Date().getTime() + (body.expires_in - 1) * 1000
    token = body.access_token
}

async function getOAuthToken() {
    if (tokenExpiry < new Date().getTime()) await updateOauthToken();
    return token
}

async function getTracks (query) {
    var options = {
        uri: "https://api.spotify.com/v1/search?q=" + query.q + "&type=track&offset=0&limit=1",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + await getOAuthToken()
        },
        json: true
    }
    return rp(options)
}

module.exports = {
    getTracks
}