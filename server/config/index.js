let nodeEnv = process.env.NODE_ENV ;
nodeEnv = nodeEnv.toLowerCase();

console.log(`Config: ${nodeEnv}`);
module.exports = require(`./${nodeEnv}`);