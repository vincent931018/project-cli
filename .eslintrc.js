module.exports = {
    "env": {
        "browser": true,
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
            "modules": true
        }
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "new-parens": 2, // new时必须加小括号
        "no-mixed-spaces-and-tabs": [2, false], // 禁止混用tab和空格
        "no-irregular-whitespace": 2, // 不能有不规则的空格
        "no-multi-spaces": 1, // 不能用多余的空格
        "no-regex-spaces": 2, // 禁止在正则表达式字面量中使用多个空格 /foo bar/
        "no-trailing-spaces": 1, // 一行结束后面不要有空格
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }], // 对象字面量中冒号的前后空格
        "space-infix-ops": 2, // 中缀操作符周围要不要有空格
        "space-unary-ops": [2, { "words": true, "nonwords": true }], // 一元运算符的前/后要不要加空格
        "spaced-comment": 0, // 注释风格要不要有空格什么的
    }
};