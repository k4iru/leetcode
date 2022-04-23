// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * 
 * @param {number[]} nums 
 * @return {number}
 */
function removeDuplicates(nums) {

    // only 1 element;
    if (nums.length <= 1) return nums.length;

    let current = 1;
    for (let i = 1; i < nums.length; i++) {

        // if current doesnt equal previous
        if (nums[i] != nums[i - 1]) {

            // set num then increment
            nums[current++] = nums[i];
        }
    }
    return current;
}

module.exports = removeDuplicates;