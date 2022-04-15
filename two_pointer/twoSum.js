// https://leetcode.com/problems/two-sum/

/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */
function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        if (map.has(temp)) {
            return [map.get(temp), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
}

module.exports = twoSum;