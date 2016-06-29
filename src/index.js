'use strict';

module.exports = function isNullOrEmpty(input) {
	return (input === null) || (input === undefined) || (input === '');
};
