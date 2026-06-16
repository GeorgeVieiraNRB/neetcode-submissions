class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;

        const map = new Map([
            [')', '('],
            [']', '['],
            ['}', '{']
        ]);

        const stack = [];

        for (const char of s) {
            if (!map.has(char)) {
                stack.push(char);
                continue
            } 
            if (stack.pop() !== map.get(char)) {
                    return false;
            }
        }

        return stack.length === 0;
    }
}