/* eslint-disable */
module.exports = {
  roots: ['<rootDir>/src'],
  displayName: 'comet',
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testEnvironment: 'jest-environment-jsdom',
  watchPlugins: [
    'jest-watch-typeahead/testname',
    'jest-watch-typeahead/filename',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
}
