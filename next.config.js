const path = require('path')

module.exports = {
  reactStrictMode: true,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  //   },
}
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

// module.exports = withPlugins([
//   [optimizedImages, {
//     /* config for next-optimized-images */
//   }],

//   // your other plugins here

// ])