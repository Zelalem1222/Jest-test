const stringLength = require('./index');

test('string lengh', () => {
  expect(stringLength('zelalemnbvf')).toBe(11);
});

test('string length 2' ,() => {
 expect(stringLength((!(length === 0) && !(length < 10)))).toBe(10);
});