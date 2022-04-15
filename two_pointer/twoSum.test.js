const twoSum = require('./twoSum');

test("nums = [2,7,11,15], target = 9", () => {
    expect(twoSum([2,7,11,15], 9)).toStrictEqual([0,1]);
  });
