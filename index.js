"use strict";

var assign = require("es5-ext/object/assign");

module.exports = {
	extends: "eslint:all",
	env: { commonjs: true },
	rules: assign({}, require("eslint-config-medikoo").rules, {
		"prefer-arrow-callback": "off",
		"prefer-destructuring": "off",
		"prefer-template": "off"
	})
};
