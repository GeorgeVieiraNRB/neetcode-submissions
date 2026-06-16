class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let m = new Map()

        for(let x = 0; x < nums.length;x++){
            if(m.has(nums[x])){
                return true
            }
            m.set(nums[x],x)
        }
        return false

    }
}
