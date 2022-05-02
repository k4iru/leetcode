const numSubarrayProductLessThanK = require('./numSubarrayProductLessThanK');

test('nums = [1,2,3], k = 0, returns 0', () => {
    expect(numSubarrayProductLessThanK([1,2,3], 0)).toBe(0);
});

test('nums = [10,5,2,6], k = 100, returns 8', () => {
    expect(numSubarrayProductLessThanK([10,5,2,6], 100)).toBe(8);
});