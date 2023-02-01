const capitalize = require ('./capitalize');

test('laRiSsa becomes Larissa', () => {
  expect(capitalize('laRiSsa')).toBe('Larissa');
});
