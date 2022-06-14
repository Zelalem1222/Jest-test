const stringLength = require('./index');
const reverseString = require('./reverseString');
const calculate = require('./calculator');

test('string lengh', () => {
  expect(stringLength('zelalem')).toBe(7);
});

it('reverse string' , () => {
  expect(reverseString('code')).toBe('edoc');
}) 

describe('final output' , () => {
  it('add' , () => {
    expect(calculate(2,3 , '+')).toBe(5);
  });
  test('subtract' , () => {
    expect(calculate(2,1,'-')).toBe(1);
  });

  
test('multiply' , () => {
  expect(calculate(2,3,'*')).toBe(6);
});
  
test('divide' , ()=> {
  expect(calculate(2,1,'/')).toBe(2);
});

});






