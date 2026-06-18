class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let m = new Map();
        let start = 0;
        let longest = 0;

        for (let current = 0; current < s.length; current++) {
            const c = s[current];

            if(m.has(c) && m.get(c) >= start ){
                start = m.get(c) + 1
            }

            m.set(c,current)
            longest = Math.max(longest, current - start + 1);
        }
        return longest;
    }
}
