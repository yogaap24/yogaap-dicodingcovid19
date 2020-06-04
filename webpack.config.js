const path = require('path');

module.exports = {
  entry: [
    './resources/js/Constants.js',
    './resources/js/app.js',
    './resources/js/countries.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'resources/dist'),
  },
};