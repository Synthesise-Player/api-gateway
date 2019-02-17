const soundcloud = require("../services/soundcloud.service");
const spotify = require("../services/spotify.service");

providers = { 
    // soundcloud,
    spotify
}

async function getAll (req, res) {
    try {
        // TODO - convert to set sooner
        let queryProviders = req.query.providers.split(',');
        queryProviders = queryProviders.filter(
            provider => Object.keys(providers).includes(provider)
        );
        queryProviders = Array.from(new Set(queryProviders));
        results = await Promise.all(queryProviders.map(
            provider => providers[provider].getTracks(req.query)
        ));
        res.status(200).send(results)
    } catch (err) {
        res.status(err.code).send(err.message);
    }   
}

module.exports = {
    getAll: getAll
};