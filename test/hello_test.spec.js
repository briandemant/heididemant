import test from 'ava';

test('my passing test', t => {
    t.pass();
});
test('my failing test', t => {
    t.fail("you have failed me");
});