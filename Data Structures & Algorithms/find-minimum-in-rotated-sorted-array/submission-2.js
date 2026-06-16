class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1 
        let m = l + Math.floor((r - l)/2)
        let min_index = nums[l] < nums[m] || nums[r] > nums[l] ? l : m
        let min = nums[min_index]

        for(let x = min_index; x < nums.length ; x++){
            min = nums[x] < min ? nums[x] : min
        }

        for(let x = nums.length; x > l ; x--){
            min = nums[x] < min ? nums[x] : min
        }

        return min
    }
}
