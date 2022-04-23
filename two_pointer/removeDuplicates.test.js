const removeDuplicates = require('./removeDuplicates');

test("nums = [1,1,2] returns 2", () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
});

test("nums = [1,1,2,3,4,5,5] returns 5", () => {
    expect(removeDuplicates([1,1,2,3,4,5,5])).toBe(5);
});

test("nums = [1] returns 1", () => {
    expect(removeDuplicates([1])).toBe(1);
});

test("nums = [] returns 0", () => {
    expect(removeDuplicates([])).toBe(0);
});