/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/tests/"],
  setupFilesAfterEnv: ["<rootDir>/tests/utils/jest.setup.ts"],
  moduleNameMapper: {'^~/(.*)$': '<rootDir>/app/$1',
  }
};