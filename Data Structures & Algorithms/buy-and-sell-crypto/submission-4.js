class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        console.log(prices.length)
        if(prices.length<=1){
            return 0
        }
        let max = 0
        let min = -1
        let profit = 0
        for(let x = 0; x<=prices.length;x++){
            if(prices[x]<min || min == -1){
                min = prices[x]
                max = 0
                continue 
            }
            max = prices[x]>max ? prices[x] : max
            profit = max-min>profit ?  max-min : profit
            console.log(`${max} ${min} ${profit}`)
        }
        //profit = max-min
        return profit
    }
}
