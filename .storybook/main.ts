import type { StorybookConfig } from '@storybook/react-webpack5';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import '../index.css';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web',
    '@newhighsco/storybook-addon-svgr',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      },
    },
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    builder: 'webpack5',
  },
  docs: {
    autodocs: 'tag',
  },
  managerHead: (head) =>
    `${head}
      <link rel="shortcut icon" href="../public/favicon.ico" type="image/ico">
      <script>
        document.title = 'Volta App';
      </script>
      `,
  previewHead: (head) => `
    ${head}
    <script>
        document.title = 'Volta App';
    </script>
  `,
  webpackFinal: async (config) => {
    if (config.module && config.module.rules) {
      const mdxRule = config.module.rules.find(
        (rule) => rule.test && rule.test.test('.mdx'),
      );
      if (mdxRule) {
        config.module.rules = config.module.rules.filter((rule) => rule !== mdxRule);
      }

      config.module.rules.push({
        test: /\.mdx?$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('@babel/preset-react')],
            },
          },
          {
            loader: require.resolve('@mdx-js/loader'),
            options: {
              remarkPlugins: [],
              rehypePlugins: [],
            },
          },
        ],
      });
    }

    config.plugins?.push(
      new HtmlWebpackPlugin({
        title: 'Volta Health',
        favicon: './public/volta-icon.png',
      }),
    );

    return config;
  },
};

export default config;
