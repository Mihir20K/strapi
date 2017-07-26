'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const _ = require('lodash');

/**
 * SSL hook
 */

module.exports = strapi => {
  return {
    /**
     * Default options
     */

    defaults: {
      ssl: {
        trustProtoHeader: false,
        trustAzureHeader: false,
        port: 443,
        ignoreUrl: false,
        temporary: false,
        skipDefaultPort: true,
        redirectMethods: ['GET', 'HEAD'],
        internalRedirectMethods: []
      }
    },

    /**
     * Initialize the hook
     */

    initialize: function(cb) {
      if (_.isPlainObject(strapi.config.middleware.settings.ssl) && !_.isEmpty(strapi.config.middleware.settings.ssl)) {
        strapi.app.use(strapi.koaMiddlewares.sslify(strapi.config.middleware.settings.ssl));
      }

      cb();
    }
  };
};
