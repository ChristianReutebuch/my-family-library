sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: com.dev.saxychris.library",
		defaults: {
			page: "ui5://test-resources/com/dev/saxychris/library/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "com/dev/saxychris/library/",
				never: "test-resources/com/dev/saxychris/library/"
			},
			loader: {
				paths: {
					"com/dev/saxychris/library": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for com.dev.saxychris.library"
			},
			"integration/opaTests": {
				title: "Integration tests for com.dev.saxychris.library"
			}
		}
	};
});
