const minimumWindowSubstring = require('./minimumWindowSubstring');

test("s = 'ADOBECODEBANC', t = 'ABC' output = BANC", () => {
    expect(minimumWindowSubstring('ADOBECODEBANC', 'ABC')).toBe("BANC");
  });
