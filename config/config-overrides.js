const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      app: path.resolve(__dirname, '../src/app'),
      components: path.resolve(__dirname, '../src/components'),
      helpers: path.resolve(__dirname, '../src/helpers'),
      hooks: path.resolve(__dirname, '../src/hooks'),
    },
  };

  return config;
};
