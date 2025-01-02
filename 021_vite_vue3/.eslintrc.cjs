/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
/**
 * 项目总注释掉 禁用掉eslint，然后在vscode中或开发工具中也禁用;
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  globals: {
    process: true,
  },
};
*/ 