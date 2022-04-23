// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * 
 * @param {number[]} nums
 * @return {number[]} 
 */
function sortedSquares(nums) {
    let res = [];
    let left = 0;
    let right = nums.length - 1;
    let pointer = right;

    // we know absolute values are highest on the ends of the array
    // construct resulting array from the end
    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            res[pointer--] = nums[left++] ** 2;
        }
        else {
            res[pointer--] = nums[right--] ** 2;
        }
    }
    return res;
}

module.exports = sortedSquares;