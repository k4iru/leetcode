// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * 
 * @param {number[]} nums 
 * @return {number}
 */
function removeDuplicates(nums) {
    let len = nums.length;
    let current = 1;
    let next = 1;
    
    while(next < len) {
        let temp = nums[next];
        if (nums[current] == nums[next]) {
            next++;
        }
        else {
            nums[current] = temp;
            current++;
        }
    }

    for (let i = current+1; i < nums.length; i++) {
        nums[i] = null;
    }

    return current+1;
}