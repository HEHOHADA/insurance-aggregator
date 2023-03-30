/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:solid/recommended",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  ignorePatterns: ["*.config.js", "server.js"],
  plugins: [
    "eslint-plugin-jsdoc",
    "eslint-plugin-prefer-arrow",
    "eslint-plugin-solid",
    "import",
    "unicorn",
    "check-file",
    "@typescript-eslint",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },

    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./",
      },
    },
  },
  rules: {
    "@typescript-eslint/no-floating-promises": "off",
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**/": "KEBAB_CASE",
      },
    ],
    "import/no-named-as-default-member": "off",
    "@typescript-eslint/no-unsafe-return": "warn",
    "import/no-named-as-default": "off",
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
      },
    ],
    "check-file/folder-match-with-fex": [
      "error",
      {
        "*.test.{js,jsx,ts,tsx}": "**/__tests__/",
      },
    ],
    "import/no-duplicates": "warn",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Object: {
            message: "Avoid using the `Object` type. Did you mean `object`?",
          },
          Function: {
            message:
              "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
          },
          Boolean: {
            message: "Avoid using the `Boolean` type. Did you mean `boolean`?",
          },
          Number: {
            message: "Avoid using the `Number` type. Did you mean `number`?",
          },
          String: {
            message: "Avoid using the `String` type. Did you mean `string`?",
          },
          Symbol: {
            message: "Avoid using the `Symbol` type. Did you mean `symbol`?",
          },
        },
      },
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": [
      "off",
      {
        multiline: {
          delimiter: "none",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },

      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },

      {
        selector: ["typeLike", "enumMember"],
        format: ["PascalCase"],
      },
      {
        selector: "objectLiteralProperty",
        format: null,
        filter: {
          regex: "[- ]",
          match: true,
        },
      },
      {
        selector: ["variable", "function", "objectLiteralMethod"],
        types: ["function"],
        format: ["camelCase", "PascalCase"],
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        caughtErrors: "none",
      },
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/semi": ["off", null],
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        path: "always",
        types: "prefer-import",
        lib: "always",
      },
    ],
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-parens": ["off", "always"],
    "brace-style": ["off", "off"],
    "comma-dangle": "off",
    complexity: "off",
    "constructor-super": "error",
    "dot-notation": "error",
    "eol-last": "off",
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",
    "id-denylist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined",
    ],
    "id-match": "error",
    indent: "off",
    "jsdoc/check-alignment": "warn",
    "jsdoc/check-indentation": "warn",
    "jsdoc/newline-after-description": "error",
    "linebreak-style": "off",
    "max-classes-per-file": ["error", 1],
    "max-len": "off",
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "off",
    "no-debugger": "error",
    "no-empty": "error",
    "no-empty-function": "off",
    "no-eval": "error",
    "no-extra-semi": "off",
    "no-fallthrough": "off",
    "no-unreachable": "warn",
    "no-invalid-this": "off",
    "no-irregular-whitespace": "off",
    "no-multiple-empty-lines": "off",
    "no-new-wrappers": "error",
    "no-shadow": "off",
    "no-throw-literal": "error",
    "no-trailing-spaces": "off",
    "no-undef-init": "error",
    "no-underscore-dangle": "off",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-use-before-define": "off",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "padded-blocks": [
      "off",
      {
        blocks: "never",
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    "prefer-arrow/prefer-arrow-functions": "off",
    "prefer-const": "error",
    "quote-props": "off",
    quotes: "off",
    radix: "error",
    semi: "off",
    "space-before-function-paren": "off",
    "space-in-parens": ["off", "never"],
    "spaced-comment": [
      "error",
      "always",
      {
        markers: ["/", "#region", "#endregion", "region", "endregion"],
      },
    ],
    "use-isnan": "error",
    "valid-typeof": "off",
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "multiline-block-like" },
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: ["const", "let"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let"],
        next: ["const", "let"],
      },
      {
        blankLine: "always",
        prev: "directive",
        next: "*",
      },
      {
        blankLine: "any",
        prev: "directive",
        next: "directive",
      },
      {
        blankLine: "always",
        prev: ["default"],
        next: "*",
      },
      { blankLine: "any", prev: ["case"], next: "*" },
    ],
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
  },

  overrides: [
    {
      files: [
        "**/test/**",
        "**/tests/**",
        "**/spec/**",
        "**/__tests__/**",
        "**/__mocks__/**",
        "*.test.*",
        "*.spec.*",
        "*.stories.*",
        "*.e2e.*",
        "*.e2e-spec.*",
      ],
      rules: {
        "unicorn/filename-case": "off",
        "check-file/folder-naming-convention": "off",
      },
    },
  ],
};
