const path = require("path");

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    settings: {
        "import/resolver": {
            webpack: {
                config: path.resolve("./webpack.config.js")
            },
            node: {
                paths: ["src"],
                extensions: [".js"]
            }
        }
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    plugins: ["import", "react", "prettier"],
    rules: {
        "no-dupe-keys": "error",
        "no-undef": "error",
        "no-unreachable": "error",
        "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "no-useless-constructor": "error",
        "no-var": "error",
        "no-duplicate-imports": "error",
        "no-duplicate-case": "error",
        "import/no-unresolved": "error",
        "import/default": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error",
        "react/react-in-jsx-scope": "error",
        "react/no-string-refs": "error",
        "react/prop-types": ["error", { skipUndeclared: true }],
        "react/forbid-prop-types": "error",
        "react/prefer-stateless-function": [
            "error",
            { ignorePureComponents: true }
        ],
        "prettier/prettier": "error",
        "no-console": "error",
        "no-debugger": "error"
    }
};