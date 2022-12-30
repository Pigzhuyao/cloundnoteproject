module.exports = {
  root: true, // zy: stop search ESLint config file when find "root: true"
  parserOptions: {
    parser: 'babel-eslint', // zy: parser(解析器) default use 'Espree'
    sourceType: 'module' // zy: code use 'ECMAScript'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'], // zy: recommended - more stringent(严格)
  // add your custom rules here
  // zy: it is base on https://github.com/vuejs/eslint-config-vue
  // zy: off/0 no work, warn/1, error/2 exit program
  // zy: 0 no repair(修复), 1/2 code will with different color show error and repair code
  // zy: TERMINAL or Broswer still show the error
  // zy: https://eslint.org/docs/rules/
  rules: {

  }
}
