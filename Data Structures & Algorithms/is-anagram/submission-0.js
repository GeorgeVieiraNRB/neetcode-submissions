class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) {
            return false;
        }

        let count = {}
        let count2 = {}

        for (let char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        for (let char of t) {
            if(!(count[char])) return false
            count[char] -= 1;
        }

        for(let char in count){
            if(count[char]!=0) return false
        }

        return true;
    }
}