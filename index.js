"use strict";

module.exports = {
	extends: "medikoo",
	parserOptions: { ecmaVersion: 5 },
	rules: {
		"no-template-curly-in-string": "off",
		"no-var": "off",
		"object-shorthand": "off",
		"prefer-arrow-callback": "off",
		"prefer-destructuring": "off",
		"prefer-rest-params": "off",
		"prefer-spread": "off",
		"prefer-template": "off",
		"spaced-comment": ["error", "always", { markers: [","] }]
	}
};
