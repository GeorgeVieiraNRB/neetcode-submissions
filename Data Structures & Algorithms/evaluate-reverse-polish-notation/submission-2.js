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
            let result = token
            if (map.has(token)) {
                let b = values.pop();
                let a = values.pop();

                result = (map.get(token)(Number(a), Number(b)));
            } 
            values.push(result);
        }

        return Number(values[0]);
    }
}