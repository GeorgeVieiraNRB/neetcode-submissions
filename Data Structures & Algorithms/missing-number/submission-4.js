class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let s = nums.length
        let sum = s 
        if(s <= 0 ) return 0
        for(let x = 0; x < s ; x++ ){
            sum+= x - nums[x]
        }
        return sum 
    }
}
