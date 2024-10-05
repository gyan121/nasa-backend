const request = require("request");

function getApod(req, res) {
  request({
    uri: `${process.env.BASE_URL}/planetary/apod`,
    qs: {
      api_key: process.env.API_KEY,
    },
  }).pipe(res);
}

function getRover(req, res) {
  request({
    uri: `${process.env.BASE_URL}/mars-photos/api/v1/rovers/curiosity/photos?sol=1000`,
    qs: {
      api_key: process.env.API_KEY,
    },
  }).pipe(res);
}

module.exports = { getApod, getRover };
