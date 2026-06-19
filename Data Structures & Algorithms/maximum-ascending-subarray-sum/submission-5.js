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
        for(let current of nums){
            if(prev<current){
                sum+=current
            }
            else{
                sum=current
            }
            max = sum > max ? sum : max
            prev = current
        }
        return max
    }
}
