module.exports = {
    "env": {
        "browser": true,
        "node":true,
        "amd":true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true,
            // 默认严格模式
            "impliedStrict":true,
        }
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "new-parens": 2, // new时必须加小括号
        "no-console": 1, // 禁用 console
        "no-debugger": 1, // 禁用 debugger
        "no-dupe-args": 2, // 禁止 function 定义中出现重名参数
        "no-dupe-keys": 2, // 禁止对象字面量中出现重复的 key
        "no-duplicate-case": 2, // 禁止重复的 case 标签
        "no-empty":2, // 禁止空语句块
        "no-extra-boolean-cast": 2, // 禁止不必要的布尔转换
        "no-extra-semi": 2, // 禁止不必要的分号
        "no-func-assign": 2, // 禁止对 function 声明重新赋值
        "no-irregular-whitespace": 2, // 禁止在字符串和注释之外不规则的空白
        "no-obj-calls": 2, // 禁止把全局对象 (Math 和 JSON) 作为函数调用 错误：var math = Math();
        "no-sparse-arrays": 2, // 禁用稀疏数组
        "no-unexpected-multiline": 2, // 禁止出现令人困惑的多行表达式
        "no-unreachable": 2, // 禁止在return、throw、continue 和 break语句之后出现不可达代码
        "use-isnan": 2, // 要求使用 isNaN() 检查 NaN
        "valid-typeof": 2, // 强制 typeof 表达式与有效的字符串进行比较
        "block-scoped-var": 2, // 强制把变量的使用限制在其定义的作用域范围内
        "curly": [2, "all"], // 强制所有控制语句使用一致的括号风格
        "default-case": 2, // switch 语句强制 default 分支，也可添加 no default 注释取消此次警告
        "dot-location": [2, "property"], // 强制object.key 中 . 的位置，参数: property，'.'号应与属性在同一行 | object, '.' 号应与对象名在同一行
        "no-mixed-spaces-and-tabs": [2, false], // 禁止混用tab和空格
        "no-irregular-whitespace": 2, // 不能有不规则的空格
        "no-multi-spaces": 1, // 不能用多余的空格
        "no-regex-spaces": 2, // 禁止在正则表达式字面量中使用多个空格 /foo bar/
        "no-trailing-spaces": 1, // 一行结束后面不要有空格
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }], // 对象字面量中冒号的前后空格
        "eqeqeq": 2, // 使用 === 替代 ==
        "no-alert": 2, // 禁用 alert、confirm 和 prompt
        "no-empty-function": 2, // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
        "no-eq-null": 1, // 禁止在没有类型检查操作符的情况下与 null 进行比较
        "no-implicit-globals": 1, // 禁止在全局范围内使用 var 和命名的 function 声明
        "no-fallthrough": 2, // 禁止 case 语句落空
        "no-extend-native": 2, // 禁止扩展原生类型
        "no-extra-bind": 2, // 禁止不必要的 .bind() 调用
        "no-eval":2, // 禁用 eval()
        "space-infix-ops": 2, // 中缀操作符周围要不要有空格
        "space-unary-ops": [2, { "words": true, "nonwords": true }], // 一元运算符的前/后要不要加空格
        "no-invalid-this": 2, // 禁止 this 关键字出现在类和类对象之外
        "no-lone-blocks": 2, // 禁用不必要的嵌套块
        "no-multi-str": 2, // 禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串
        "no-native-reassign": 2, // 禁止对原生对象赋值
        "no-new": 2, // 禁止在非赋值或条件语句中使用 new 操作符
        "no-param-reassign": 2, // 不允许对 function 的参数进行重新赋值
        "no-redeclare": 2, // 禁止使用 var 多次声明同一变量
        "no-script-url": 2, // 禁止使用 javascript: url
        "no-self-assign": 2, // 禁止自我赋值
        "no-self-compare": 2, // 禁止自身比较
        "no-unused-expressions": 2, // 禁止出现未使用过的表达式
        "no-unused-labels": 2, // 禁用未使用过的标签
        "no-useless-call": 2, // 禁止不必要的 .call() 和 .apply()
        "no-useless-concat": 2, // 禁止不必要的字符串字面量或模板字面量的连接
        "vars-on-top": 1, // 要求所有的 var 声明出现在它们所在的作用域顶部
        "wrap-iife": [2, "any"], // 要求 IIFE 使用括号括起来
        "no-shadow": 2, // 禁止 var 声明 与外层作用域的变量同名
        "no-use-before-define": 2, // 不允许在变量定义之前使用它们
        "no-unused-vars": [2, {"vars":"all","args":"none"}], // 禁止出现未使用过的变量
        "no-undefined": 2, // 禁止将 undefined 作为标识符
        //////////////
        // 风格指南 //
        //////////////
        "array-bracket-spacing": [2, "never"], // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        "brace-style": [2, "1tbs", {"allowSingleLine":true}],
        "no-spaced-func": 2, // 禁止 function 标识符和括号之间出现空格
        "no-whitespace-before-property": 1, // 禁止属性前有空白
    }
};