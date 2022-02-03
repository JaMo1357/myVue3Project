module.exports = {
    extends: [
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-recommended",
    ],
    plugins: [
        "vue",
        "@typescript-eslint",
        "import"
    ],
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    rules: {
        'max-len': ['warn', {code: 120}],
        'vue/mustache-interpolation-spacing': ['error', 'always'],
        'no-unused-vars': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi': ['error', 'always'],
        'newline-before-return': 2,
        'indent': [2, 'tab'],
        'vue/html-quotes': [ 'error', 'double', { 'avoidEscape': true } ]
    }
}
