module.exports = {
  name: 'api-api',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/api/api',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
};
