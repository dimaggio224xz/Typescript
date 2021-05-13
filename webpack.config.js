const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'main-pages$': path.resolve(__dirname, 'src/pages'),
    },
  },
};
