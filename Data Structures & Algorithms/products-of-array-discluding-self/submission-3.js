class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let size = nums.length
        let m = 1
        let res = []
        let countZeros = 0
        for(let x = 0;x<size;x++){
            if(nums[x]==0){
                countZeros += 1
            }
            m = m * (nums[x] || 1 )
        }
        for(let x = 0;x<size;x++){
            // if(countZeros>=(size-countZeros)){
            //     res[x]=0
            // }
            if(countZeros>0){
                //countZeros-=1
                if(nums[x]==0){
                    res[x] = countZeros-1 == 0 ? m / (nums[x] || 1 ):0
                }else{
                    res[x] = 0
                }
            }else{
                res[x] = m / (nums[x] || 1 )
            }
        }
        return res

    }
}
