module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ['airbnb'],
    plugins: ['babel', 'import', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    rules: {
        'linebreak-style': 'off', // с Windows работает плохо

        'arrow-parens': 'off', // несовместимо с prettier
        'object-curly-newline': 'off', // несовместимо с prettier
        'no-mixed-operators': 'off', // несовместимо с prettier
        'arrow-body-style': 'off',
        'function-paren-newline': 'off', // несовместимо с prettier
        'no-plusplus': 'off',
        'space-before-function-paren': 0, // несовместимо с prettier

        'max-len': ['error', { code: 100, tabWidth: 4, ignoreUrls: true }],
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-console': 'off', // airbnb использует warn
        'no-alert': 'error', // airbnb использует warn

        'no-param-reassign': 'off',
        radix: 'off',

        'prefer-destructuring': 'off',

        'prettier/prettier': ['error'],

        'consistent-return': 'off',
        'no-underscore-dangle': 'off',
        'func-names': ['error', 'never'],
        'operator-linebreak': 'off',
        'no-use-before-define': ['error', { functions: false }],

        'wrap-iife': ['error', 'inside'],
        'no-unused-expressions': ['error', { allowTernary: true }],
        'no-new': 'off',
        'implicit-arrow-linebreak': 'off',
    },
};
