module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parser: "babel-eslint",
  extends: [
    "airbnb-base",
    "plugin:flowtype/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["flowtype"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "flowtype/no-types-missing-file-annotation": "off"
  }
};
