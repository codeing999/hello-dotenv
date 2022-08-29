const dotenv = require('dotenv');

const value = dotenv.config({
    path: '.env'
});

console.log(value);

module.exports = value.parsed;
