// https://leetcode.com/problems/3sum/


/**
 * 
 * @param {number[]} nums 
 * @return {number[][]}
 */
function threeSum(nums) {
	const results = []

	if (nums.length < 3) return results

	// having the numbers in ascending order will make this problem much easier.
	// also, knowing the overall problem  will take at least O(N^2) time, we can
	// afford the O(NlogN) sort operation
	nums = nums.sort((a, b) => a - b)

    // if the question asks us for a custom target, we can control it here
	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {
		// `i` represents the "left" most number in our sorted set.
		// once this number hits 0, there's no need to go further since
		// positive numbers cannot sum to a negative number
		if (nums[i] > target) break

		// we don't want repeats, so skip numbers we've already seen
		if (i > 0 && nums[i] === nums[i - 1]) continue

		// `j` represents the "middle" element between `i` and `k`.
		// we will increment this up through the array while `i` and `k`
		// are anchored to their positions. we will decrement `k` for
		// for each pass through the array, and finally increment `i`
		// once `j` and `k` meet.
		let j = i + 1

		// `k` represents the "right" most element
		let k = nums.length - 1

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]

			if (sum === target) {
				// store the valid threesum
				results.push([nums[i], nums[j], nums[k]])

                // handle duplicates
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

                // get the next unique number
				j++
				k--

			} else if (sum < target) {
				j++

			} else { // (sum > target)
				k--
			}
		}
	}

	return results
}

module.exports = threeSum;