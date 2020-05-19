module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
    roots: ['src'],
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    moduleNameMapper: {
      '@app/(.*)': '<rootDir>/src/app/$1',
      '@assets/(.*)': '<rootDir>/src/assets/$1',
      '@core/(.*)': '<rootDir>/src/app/core/$1',
      '@env': '<rootDir>/src/environments/environment',
      '@src/(.*)': '<rootDir>/src/src/$1',
      '@state/(.*)': '<rootDir>/src/app/state/$1'
    },
    transformIgnorePatterns: [
      '/node_modules/(?!@ionic|ngx-socket-io/).+\\.js$'
    ]
  };