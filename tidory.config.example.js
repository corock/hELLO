/**
 * Tidory Configuration
 * https://tidory.com/docs/configuration/
 */
require('dotenv').config();

module.exports = {
  ts_session: process.env.TS_SESSION,
  url: process.env.URL,

  /**
   * Preview
   */
  preview: {
    /**
     * Preview Mode
     * @var {index | entry | category | tag | location | media | guestbook}
     */
     mode: 'index',

     /**
      * homeType
      * @var {NONE | COVER}
      */
     homeType: 'NONE',
  },

  /**
   * Template aliases
   */
  alias: {
    '@': 'assets',
    '~views': 'views',
  },

  /**
   * Webpack Configuration
   *
   * @param {object} webpackConfig
   */
  extends(webpackConfig) {
    webpackConfig.module.rules = [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      ...webpackConfig.module.rules,
    ];
  },
};
