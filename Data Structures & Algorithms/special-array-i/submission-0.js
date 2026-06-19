class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        if(nums.length==1) return true
        for(let x = 0; x < nums.length - 1 ;x++){
            if(nums[x]%2==nums[x+1]%2){
                return false
            }
        }
        return true
    }
        
}
