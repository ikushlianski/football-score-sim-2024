/* eslint-disable */
export default {
  displayName: 'tournaments',
  preset: '../jest.preset.js',
  testEnvironment: 'node',
  "transform": {
    "^.+\\.(t|j)s?$": ["@swc/jest"]
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../coverage/tournaments',
};
