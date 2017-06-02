import test from 'ava';
import m from '.';

test(async t => {
	const res = await m();
	t.is(typeof res.adapterInfo, 'number');
	t.is(typeof res.iORegistryEntryName, 'string');
});
