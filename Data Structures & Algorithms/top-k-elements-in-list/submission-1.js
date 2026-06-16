class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map()
        for(let x = 0;x < nums.length;x++){
            let value = nums[x]
            let hasValue = count.get(value) | 0 
            count.set(value,hasValue+1)
        }
        
        let result = Array.from(count.entries()).sort((a, b) => b[1] - a[1]);

        let arr = [];

        for (let i = 0; i < k; i++) {
            arr.push(Number(result[i][0]));
        }


        return arr

    }
}
