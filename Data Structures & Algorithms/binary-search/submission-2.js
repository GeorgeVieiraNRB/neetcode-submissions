class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    binary_search(l,r,nums,target){
        if (l > r ) return -1

        let mid = l+Math.floor((r - l) / 2);

        if(nums[mid]===target) return mid

        return target > nums[mid] ? this.binary_search(mid+1,r,nums,target) : this.binary_search(l,mid-1,nums,target)
    }

    search(nums, target) {
        return this.binary_search(0,nums.length-1,nums,target)
    }
}
