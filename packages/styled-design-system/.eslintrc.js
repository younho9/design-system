module.exports = {
  extends: ['../../.eslintrc.js'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
    project: './tsconfig.eslint.json',
    createDefaultProgram: true,
    tsconfigRootDir: __dirname,
  },
};
