const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@src': 'src',
    '@pages': 'src/pages',
    '@root-constants': 'src/constants',
    '@root-routing': 'src/Routing',
    '@root-redux': 'src/redux',
  })(config);

  return config;
};
