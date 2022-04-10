// https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/1025753/Simplest-Sliding-Window-Solution-O(N)-Heavily-Commented-JavaScript

/**
 * 
 * @param {string} s 
 * @param {string} p 
 * @return {number[]}
 */
function findAllAnagrams(s, p) {
    const output = [];
    const neededChars = {};

    for (let c of p) {
        if (c in neededChars) {
            neededChars[c]++;
        }
        else {
            neededChars[c] = 1;
        }
    }

    let left = 0;
    let right = 0;
    let count = p.length;

    while (right < s.length) {
        if (neededChars[s[right]] > 0) {
            count--;
        }

        neededChars[s[right]]--;
        right++;

        if (count === 0) {
            output.push(left);
        }

        if (right - left == p.length) {
            if (neededChars[s[left]] >= 0) {
                count++;
            }

            neededChars[s[left]]++;
            left++;
        }
    }
    return output;
}

module.exports = findAllAnagrams;
