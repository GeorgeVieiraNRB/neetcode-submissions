class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let r = []
        let z = n
        let rest = 0
        let count = 0
        for(let x = 0; x <= n ; x++){
            count=0
            z = x     
            while(z>=1){
                rest = z % 2
                z = ( z - rest ) / 2
                count+=rest
            }
            r.push(count)
        }
        return r
    }
}
