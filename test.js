'use strict';
var test = require('ava');
var fn = require('./');

test(async t => {
	t.plan(1);

	const obj = await fn();
	t.ok(obj);
});
