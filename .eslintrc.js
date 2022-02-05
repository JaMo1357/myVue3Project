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
        parser: "@typescript-eslint/parser",
        sourceType: "module"
    },
    rules: {
        "max-len": ["warn", {code: 120}],
        "vue/mustache-interpolation-spacing": ["error", "always"],
        "no-unused-vars": "off",
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "semi": ["error", "always"],
        "padding-line-between-statements": ["error", { blankLine: "always", prev: "var", next: "return" }],
        "indent": [2, "tab"],
        "vue/html-quotes": [ "error", "double", { "avoidEscape": true } ],
        "space-before-blocks": ["error", { "functions": "always", "keywords": "never", "classes": "never" }],
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": false }],
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "quotes": [2, "single", { "avoidEscape": true }],
        "object-curly-spacing": ["error", "always", { "objectsInObjects": false }],
    }
}
