module.exports = {
  displayName: 'vue-book',
  preset: '../jest.preset.js',
  transform: {
    '^.+.vue$': '@vue/vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../coverage/./vue-book',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: './vue-book/tsconfig.spec.json',
      babelConfig: './vue-book/babel.config.js',
    },
    'vue-jest': {
      tsConfig: './vue-book/tsconfig.spec.json',
      babelConfig: './vue-book/babel.config.js',
    },
  },
};
