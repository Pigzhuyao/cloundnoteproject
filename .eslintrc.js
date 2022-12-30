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
    // *** Template ***
    // [S警告] [S去除] 复数空行
    "no-multiple-empty-lines": [2, { "max": 1 }],
    // [S警告] [S去除] 块内行首行尾空行
    "padded-blocks": [2, "never"],
    // [S警告] [S修改] 行前缩进
    'indent': [2, 2, { 'SwitchCase': 1 }],
    // [S警告] [S去除] 行末分号 ("always" 分号结尾)
    'semi': [2, 'never'],
    // [S警告] [S去除] 分号前/后无空格
    'semi-spacing': [2, { 'before': false, 'after': false }],
    // [S警告] [D去除] 不必要分号
    "no-extra-semi": 2,
    // [S警告] [S去除] 行末空格
    "no-trailing-spaces": 2,
    // [S警告] [S去除] 文件结尾逗号
    "comma-dangle": [2, "never"],
    // [S警告] [S增加] 文件换行符(结束)
    "eol-last": 2,
    // [S警告] [S修改] 禁止使用var
    "no-var": 2,
    // [S警告] [S修改] let -> const
    'prefer-const': 2,
    // [S警告] [S修改] 引号风格
    "quotes": [2, "single", "avoid-escape"],
    // [S警告] [S去除] 复数空格
    'no-multi-spaces': 2,
    // [S警告] [S修改] 逗号前无空格(后需允许)
    'comma-spacing': [2, { 'before': false, 'after': true }],
    // [S警告] [S修改] 操作符前/后有空格
    'space-infix-ops': 2,
    // [S警告] [S修改] 一元运算符前/后无空格
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    // [S警告] [S去除] 括号内空格
    'space-in-parens': [2, 'never'],
    // [S警告] [S修改] 方法括号前无空格
    'space-before-function-paren': [2, 'never'],
    // [S警告] [S修改] 调用的方法括号前无空格
    'no-spaced-func': 2,
    // [S警告] [S增加] 块之前使用空格(function XX() {})
    'space-before-blocks': [2, 'always'],
    // [S警告] [SXXXX] 不允许不必要嵌套块
    'no-lone-blocks': 2,
    // [S警告] [SXXXX] 不允许有空代码块
    "no-empty": 2,
    // [S警告] [SXXXX] 不允许出现空函数
    'no-empty-function': 2,
    // [ *** Variable *** ]
    // [D警告] [SXXXX] 条件语句 不可使用不变值(null/false...)
    "no-constant-condition": 2,
    // [D警告] [SXXXX] 条件语句 不可出现赋值运算符
    "no-cond-assign": 2,
    // [S警告] [SXXXX] 条件语句 不可使用yoda条件 不变值不可判(X null = variable)
    "yoda": [2, "never", { "exceptRange": true }],
    // [S警告] [SXXXX] 条件语句 不允许自己和自己比较
    "no-self-compare": 2,
    // [S警告] [SXXXX] 不允许无用的表达式
    "no-unused-expressions": 2,
    // [D警告] [SXXXX] 不允许未声明变量
    'no-undef': 2,
    // [D警告] [SXXXX] 不允许变量声明未使用
    "no-unused-vars": [2, { "vars": "all", "args": "after-used" }],
    // [S警告] [SXXXX] 不允许变量声明前使用
    "no-use-before-define": [2, "nofunc"],
    // [S警告] [SXXXX] 不允许变量赋值 undefined
    "no-undef-init": 2,
    // [S警告] [SXXXX] 不可做变量 undefined
    "no-undefined": 2,
    // [ *** Logic *** ]
    // [ *** Symbol *** ]
    // [S警告] [SXXXX] 严格等号
    "eqeqeq": 2,
    // [ *** Other *** ]
    // [S警告] [D去除] 生产环境允许debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // [D警告] [SXXXX] 不允许使用控制台输出
    'no-console': 2,
    // [D警告] [SXXXX] 不允许出现重复的键
    "no-dupe-keys": 2,
    // [S警告] [SXXXX] 不允许function出现重名参数
    'no-dupe-args': 2,
    // [ *** Vue *** ]
    // [D警告] [SXXXX] 允许一行最多有5个属性
    "vue/max-attributes-per-line": [2, {
      "singleline": 5,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
  }
}
