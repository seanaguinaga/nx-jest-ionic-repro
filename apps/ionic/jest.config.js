module.exports = {
  displayName: 'ionic',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/ionic',
  // From https://ionicframework.com/docs/intro/upgrading-to-ionic-6#testing
  transformIgnorePatterns: [
    '/node_modules/(?!@ionic/core|@stencil/core|ionicons)',
  ],
};
