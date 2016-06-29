'use strict';

var test = require('tape');
var isNullOrEmpty = require('./../index');

test('isNullOrEmpty', function (t) {
	var expected,
		actual;

	t.plan(6);

	expected = true;
	actual = isNullOrEmpty(null);
	t.equal(actual, expected, 'Given the \'null\' primitive, it should return true');

	expected = true;
	actual = isNullOrEmpty(undefined);
	t.equal(actual, expected, 'Given the \'undefined\' primitive, it should return true');

	expected = true;
	actual = isNullOrEmpty('');
	t.equal(actual, expected, 'Given an empty string, it should return true');

	expected = false;
	actual = isNullOrEmpty('null');
	t.equal(actual, expected, 'Given the string literal \'null\', it should return false');

	expected = false;
	actual = isNullOrEmpty('undefined');
	t.equal(actual, expected, 'Given the string literal \'undefined\', it should return false');

	expected = false;
	actual = isNullOrEmpty(' ');
	t.equal(actual, expected, 'Given a string with only spaces, it should return false');
});
