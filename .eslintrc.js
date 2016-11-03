module.exports = {
    parser: 'babel-eslint',
    plugins: [
        'react',
    ],
    parserOptions: {
        jsx: true,
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        // http://eslint.org/docs/rules/indent
        // indent 4 spaces (rather than airbnb's default of 2)
        indent: [1, 4],
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        // indent 4 spaces (rather than airbnb's default of 2)
        'react/jsx-indent': [2, 4],
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        // indent 4 spaces (rather than airbnb's default of 2)
        'react/jsx-indent-props': [2, 4],
    },
    env: {
        mocha: true,
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: 'config/webpack.config.development.js',
            },
        },
    },
}
