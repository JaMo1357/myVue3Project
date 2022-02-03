module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-recommended",
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint",
        "import"
    ],
    "rules": {
        "max-len": ["warn", {"code": 120}],
        "vue/mustache-interpolation-spacing": ["error", "always"],
        "no-unused-vars": "off",
    }
}
