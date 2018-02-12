const heroes = require('../src/mock/playtime.json');
const download = require('image-downloader');
const path = require('path');

Object.keys(heroes).forEach(hero => {
  const options = {
    "url": `https://d1u1mce87gyfbn.cloudfront.net/hero/${hero}/career-portrait.png`,
    "dest": path.resolve(__dirname,`../public/img/${hero}.png`)
  }

  download.image(options)
  .then(({ filename, image }) => {
    console.log('File saved to', filename)
  }).catch((err) => {
    throw err
  })

})

console.log('done!');
