// https://leetcode.com/problems/subarray-product-less-than-k/

/**
 * 
 * @param {number[]} nums 
 * @param {number} k
 * @return {number} 
 * ex Input: nums = [10,5,2,6], k = 100
 * Output: 8
 */
function numSubarrayProductLessThanK(nums, k) {

    if (k <= 1) return 0;
    let res = 0;
    let left = right = 0;
    let product = 1;
    while (right < nums.length) {

        // product of next number;
        product *= nums[right];
        while (product >= k) {
            product /= nums[left];
            left++;
        }
        res += right - left + 1;
        right++;

    }

    return res;
}

module.exports = numSubarrayProductLessThanK;