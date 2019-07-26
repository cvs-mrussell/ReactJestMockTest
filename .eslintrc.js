module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "jest": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "extends": [
        "airbnb",
        "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
        "@typescript-eslint/promise-function-async": [
            "error",
            {
                "allowedPromiseNames": ["Thenable", "AxiosResponse"],
                "checkArrowFunctions": true,
                "checkFunctionDeclarations": true,
                "checkFunctionExpressions": true,
                "checkMethodDeclarations": true
            }
        ],
        "@typescript-eslint/no-unnecessary-type-assertion": ["error"],
        "@typescript-eslint/no-object-literal-type-assertion": ["error", {
            allowAsParameter: true
        }],
        "@typescript-eslint/no-this-alias": [
            "error",
            {
                allowDestructuring: true
            }
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/indent": ["error", 4], // Airbnb deviation
        "@typescript-eslint/interface-name-prefix": "always",
        "@typescript-eslint/semi": ["always", "error"],
        "@typescript-eslint/no-inferrable-types": [
            "error", "always",
            {
                "ignoreParameters": true,
                "ignoreProperties": true
            }
        ],
        "unicode-bom": "off",
        "eol-last": ["error", "never"], // Airbnb deviation
        "linebreak-style": ["error", "windows"],
        "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
        "semi": "off", // Prefer the eslint-typescript rule
        "object-curly-newline": [
            "error",
            {
                "consistent": true
            }
        ],
        "require-await": "error",
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }], // Airbnb deviation
        "operator-linebreak": // Airbnb deviation
        [
            "error",
            "before",
            {
                "overrides": { "=": "after" }
            }
        ],
        "no-continue": "off", // Airbnb deviation
        "implicit-arrow-linebreak": "off", // Airbnb deviation
        "jsx-a11y/label-has-for": "off", // deprecated
        "react/destructuring-assignment": "off", // Airbnb deviation
        "react/jsx-indent": ["error", 4], // Airbnb deviation
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [
                    ".jsx", ".tsx"
                ]
            }
        ],
        "react/jsx-indent-props": [ // Airbnb deviation
            "error",
            4
        ],
        "react/jsx-one-expression-per-line": ["on", { "allow": "literal" }]
    }
};