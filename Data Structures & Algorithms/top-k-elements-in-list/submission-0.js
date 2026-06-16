class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (let num of nums) {
            map.set(num, Math.max((map.get(num) || 0) + 1, 1));
        }

        let result = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

        let arr = [];

        for (let i = 0; i < k; i++) {
            arr.push(Number(result[i][0]));
        }

        return arr;
    }
}
