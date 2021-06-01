const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@src': 'src',
    '@pages': 'src/pages',
    '@root-constants': 'src/constants',
    '@root-components': 'src/components',
    '@root-redux': 'src/redux',
  })(config);

  return config;
};
