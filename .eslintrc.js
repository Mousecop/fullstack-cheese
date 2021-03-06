module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": ["warn", { "vars": "local", "args": "none", "ignoreRestSiblings": false }],
        "no-undef": 1,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            0,
            "single"
        ],
        "semi": [
            0
        ],
        "no-extra-semi": 0
    }
}
