"use strict";

var assign = require("es5-ext/object/assign");

module.exports = {
	extends: "eslint:all",
	env: { commonjs: true },
	rules: assign({}, require("eslint-config-medikoo").rules, {
		"no-template-curly-in-string": "off",
		"no-var": "off",
		"object-shorthand": "off",
		"prefer-arrow-callback": "off",
		"prefer-destructuring": "off",
		"prefer-rest-params": "off",
		"prefer-template": "off",
		"spaced-comment": ["error", "always", { markers: [","] }]
	})
};
