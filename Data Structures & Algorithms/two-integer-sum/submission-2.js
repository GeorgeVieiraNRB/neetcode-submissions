class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let m = new Map();

        for (let x = 0; x < nums.length; x++) {
            let current = nums[x];
            let complement = target - current;

            let complPos = m.get(complement) 
            if ((complPos!==undefined)) {
                return [complPos, x];
            }

            m.set(current, x);
        }

        return [];
    }
}