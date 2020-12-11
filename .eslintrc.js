/*
 * @Author: 王伟斌
 * @Date: 2020-12-10 16:35:44
 * @LastEditors: 王伟斌
 * @LastEditTime: 2020-12-10 17:16:57
 * @FilePath: \mobile\.eslintrc.js
 */
module.exports = {
  root: false,
  env: {
    node: false
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
