const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx)', '../src/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
    'storybook-css-modules-preset',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@kit/components': path.resolve(__dirname, '../src/components'),
      '@kit/containers': path.resolve(__dirname, '../src/containers'),
      '@kit/pages': path.resolve(__dirname, '../src/pages'),
      '@kit/styles': path.resolve(__dirname, '../src/styles'),
      '@kit/utils': path.resolve(__dirname, '../src/utils'),
    }

    return config
  },
  core: {
    builder: 'webpack5',
  },
}
