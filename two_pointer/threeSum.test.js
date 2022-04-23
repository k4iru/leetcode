const threeSum = require('./threeSum');

test('nums = [-1,0,1,2,-1,-4], result = [[-1,-1,2],[-1,0,1]]', () => {
    expect(threeSum([-1,0,1,2,-1,-4])).toStrictEqual([[-1,-1,2],[-1,0,1]]);
});