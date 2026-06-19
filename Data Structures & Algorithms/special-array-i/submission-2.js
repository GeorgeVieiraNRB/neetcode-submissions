class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        let size = nums.length 
        //if(size==1) return true
        for(let x = 0; x < size - 1 ;x++){
            if(nums[x]%2==nums[x+1]%2){
                return false
            }
        }
        return true
    }
        
}
