const rp = require('request-promise');

Authorization = process.env.SOUNDCLOUD

async function getTracks (query) {
    const uri = "https://api-v2.soundcloud.com/search/queries?q="+ query.q + "&client_id=" + Authorization +"&limit=10&offset=0&linked_partitioning=1&app_version=1547206595&app_locale=en";
    // console.log(soundcloud_URL)
    var options = {
        uri,
        qs: {
            access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };
    return data = rp(options);
}

module.exports = {
    getTracks
}