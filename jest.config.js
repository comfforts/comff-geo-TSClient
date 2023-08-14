/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/lib/proto/*'],
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/lib/proto/*'],
}
