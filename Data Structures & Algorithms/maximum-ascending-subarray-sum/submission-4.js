class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let size = nums.length
        let sum = 0
        let max = 0
        let prev = 0
        if(size==1) return nums[0]
        for(let x = 0; x < size ; x++){
            if(prev<nums[x]){
                sum+=(nums[x])
            }
            else{
                sum=nums[x]
            }
            max = sum > max ? sum : max
            prev = nums[x]
        }
        return max
    }
}
