const stringLength = require('./stringLength');

test('length of Larissa should be 6', () => {
  expect(stringLength("Larissa")).toBe(7);
});