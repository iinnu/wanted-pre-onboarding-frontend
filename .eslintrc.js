module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
