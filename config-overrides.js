const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@pages': 'src/pages',
  })(config);

  return config;
};
