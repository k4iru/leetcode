// https://leetcode.com/problems/3sum/


/**
 * 
 * @param {number[]} nums 
 * @return {number[][]}
 */
function threeSum(nums) {

    if (nums.length < 3) return [];

    function twoSum(nums, k) {
        let map = new Map();

        for( let i = 0; i < nums.length; i++) {
            let temp = k - nums[i];
            if (map.has(temp)) {
                return [map.get(temp), nums[i], k];
            }
            else {
                map.set(nums[i], i);
            }
        }
    }

}

module.exports = threeSum;