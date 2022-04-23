const sortedSquares = require('./sortedSquares');

test('nums = [-4,-1,0,3,10], returns [0,1,9,16,100]', () => {
    expect(sortedSquares([-4,-1,0,3,10])).toStrictEqual([0,1,9,16,100]);
});