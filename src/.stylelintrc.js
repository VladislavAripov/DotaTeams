module.exports = {
    "extends": "stylelint-config-standard-scss",
    "defaultSeverity": "warning",
    "plugins": [
        "stylelint-scss",
        "stylelint-prettier"
    ],
    "rules": {
        "indentation": 4,
        "property-no-vendor-prefix": true,
        "selector-no-vendor-prefix": true,
        "no-descending-specificity": null,
        "selector-class-pattern": null,
        "scss/at-mixin-pattern": null,
        "keyframes-name-pattern": null,
        "font-family-name-quotes": null,
        "string-quotes": null,
        "alpha-value-notation": null,
        "color-function-notation": null,
        "shorthand-property-no-redundant-values": null,
        "number-max-precision": null,
        "function-url-quotes": null,
        "scss/at-import-partial-extension": null,
        "scss/at-mixin-argumentless-call-parentheses": null,
        "scss/operator-no-newline-after": null,
        "scss/operator-no-unspaced": null,
        "scss/double-slash-comment-empty-line-before": null,
        "scss/no-global-function-names": null,
        "scss/at-rule-conditional-no-parentheses": null,
        "scss/at-if-closing-brace-space-after": null,
        "scss/at-if-closing-brace-newline-after": null,
        "scss/at-else-empty-line-before": null,
        "scss/dollar-variable-empty-line-before": null,
        "scss/dollar-variable-colon-space-after": null,
        "scss/at-extend-no-missing-placeholder": null,
        "declaration-colon-newline-after": null,
        "value-list-comma-newline-after": null,
        "prettier/prettier": [
            true,
            {
                "singleQuote": true,
                "endOfLine": "auto"
            }
        ]
    },
};
