/* eslint-disable */
export default {
  displayName: 'players',
  preset: '../jest.preset.js',
  testEnvironment: 'node',
  "transform": {
    "^.+\\.(t|j)s?$": ["@swc/jest"]
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../coverage/players',
};
