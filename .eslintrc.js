module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
        // "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-undef": 0,
        "react/jsx-key": 0,
        "react/prop-types": 0,
        "quotes": 0,
        "quote-props": 0
    }
}
