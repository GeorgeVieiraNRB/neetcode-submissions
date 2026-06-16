class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let values = [];

        let map = new Map();
        map.set("+", (a, b) => a + b);
        map.set("-", (a, b) => a - b);
        map.set("/", (a, b) => Math.trunc(a / b));
        map.set("*", (a, b) => a * b);

        for (const token of tokens) {
            if (map.has(token)) {
                let b = values.pop();
                let a = values.pop();

                let result = map.get(token)(a, b);
                values.push(result);
            } else {
                values.push(Number(token));
            }
        }

        return values[0];
    }
}