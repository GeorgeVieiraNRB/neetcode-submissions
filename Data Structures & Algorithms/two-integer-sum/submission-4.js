class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let m = new Map()
        for( let x = 0; x< nums.length ; x++ ){
            let v = nums[x]
            let complement = target - v
            if( m.has(complement) ){
                return [x,m.get(complement)]
            }
            m.set(v,x)
        }

    }
}
