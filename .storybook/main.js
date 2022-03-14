// .storybook/main.js

const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
		'@storybook/addon-a11y'
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    /**
     * Add support for alias-imports
     * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
     */
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [path.resolve(__dirname, '../lib/'), path.resolve(__dirname, '../')],
    };

    return config;
  },
	// staticDirs: process.env.NODE_ENV === 'development' ? [] : ['../public/storybook-static'],
	managerHead: (head, { configType }) => {
    if (configType === 'PRODUCTION') {
      return (`
        ${head}
        <base href="/storybook-static/">
      `);
    }
  },
};
