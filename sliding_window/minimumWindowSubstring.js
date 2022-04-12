// https://leetcode.com/problems/minimum-window-substring/discuss/411388/JavaScript-Solution-w-Detailed-Comments

/**
 * 
 * @param {string} s 
 * @param {string} t 
 * @return {string}
 */
function minimumWindowSubstring(s, t) {

    // no possible minimum substring
    if (t.length < s.length) return "";

    let map = {};
    let left = 0, right = -1, min = "";

    // map chars in t to get count
    t.split('').forEach(e => {
        if (map[e] == null) map[e] = 1;
        else map[e] = map[e]++;
    });

    let count = Object.keys(map).length;

    while (right <= s.length) {

        // valid substring 
        if (count == 0) {

            // try and shrink the substring from the left side
            let current = s[left];

            // character is needed so we increment
            if (map[current] != null) map[current]++;

            // * we must have the condition `>0` because for case like "BBBA...", count for B could be negative
            if (map[current] > 0) count++;

            let temp = s.substring(left, right + 1)
            if (min == "") min = temp;
            else min = min.length < temp.length ? min : temp;
            left++;
        }

        else {
            right++;
            let current = s[right];

            if (s[right] != null) map[current]--;

            if (map[current] === 0) count--;
        }
    }
    return min;
}

module.exports = minimumWindowSubstring;