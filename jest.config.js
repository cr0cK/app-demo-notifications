/* eslint-disable no-undef */

module.exports = {
  rootDir: '.',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testPathIgnorePatterns: ['/node_modules/', 'dist', '.cy.', 'test-helper'],
  coverageReporters: ['lcov'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!dist/**', '!**/node_modules/**'],
  preset: 'ts-jest'
}
