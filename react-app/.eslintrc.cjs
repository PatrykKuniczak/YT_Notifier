module.exports = {
    env: { browser: true, es2022: true, node: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react', 'react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off'
    }
};
