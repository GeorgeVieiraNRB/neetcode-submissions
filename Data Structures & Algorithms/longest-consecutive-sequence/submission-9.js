class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let seq = new Map()
        let bigSeq = []
        let nums_2 = []

        if(nums.length <= 1) return nums.length

        nums.forEach((value,index)=>{
            if(!seq.has(value)){
                seq.set(value,[value])
                //nums_2.push(value)
            }
        })
        
        let coef = 0
        let i = 1 

        
        console.log(nums.sort())
        console.log('---')

        nums = [...seq.keys()];

        while(coef < nums.length){
            let value = nums[coef]
            let temp = []
            if(seq.has(value-1)){
                coef+=1
                i=1
                continue
            }

            if(seq.has(value+i)){
                temp = [...seq.get(value),value+i]
                seq.set(value,temp)
                i+=1
            
            }else{
                coef+=1
                i=1
            }

            if(bigSeq.length < temp.length ){
                bigSeq = temp
            }
            console.log(bigSeq)
        }
        return bigSeq[0]!=bigSeq[bigSeq.length-1] ? bigSeq.length : 1
    }
}
