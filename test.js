import test from 'ava';
import m from './index.js';

test('get battery', async t => {
	const result = await m();
	t.is(typeof result.adapterInfo, 'number');
	t.is(typeof result.iORegistryEntryName, 'string');
});
