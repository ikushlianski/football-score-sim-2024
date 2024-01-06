/* eslint-disable */
export default {
  displayName: 'auth',
  preset: '../jest.preset.js',
  testEnvironment: 'node',
  "transform": {
    "^.+\\.(t|j)s?$": ["@swc/jest"]
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../coverage/auth',
};
