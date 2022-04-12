const findAllAnagrams = require('./findAllAnagrams');

test("s = 'cbaebabacd', p = 'abc' output = [0,6]", () => {
  expect(findAllAnagrams('cbaebabacd', 'abc')).toStrictEqual([0, 6]);
});

test("s = '', p = '' output = []", () => {
  expect(findAllAnagrams('', '')).toStrictEqual([]);
});

test("s = 'abcdefg', p = 'zzz' output = []", () => {
  expect(findAllAnagrams('abcdefg', 'zzz')).toStrictEqual([]);
});

test("s = 'abcdaedgzae', p = 'a' output = [0,4,9]", () => {
  expect(findAllAnagrams('abcdaedgzae', 'a')).toStrictEqual([0,4,9]);
});

test("s = 'abcdaedgz a e', p = 'a' output = [0,4,10]", () => {
  expect(findAllAnagrams('abcdaedgz a e', 'a')).toStrictEqual([0,4,10]);
});

