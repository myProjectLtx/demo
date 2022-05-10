module.exports = {
    root: true,
    env: {
        node: true,
        jquery: true //此处配置意思为全局引入jquery
    },
    extends: [
        "plugin:vue/essential",
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
      "on-unused-vars": "off"
    },
}
