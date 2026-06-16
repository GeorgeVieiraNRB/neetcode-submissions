class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const nonalpha = /[^a-zA-Z0-9]/g
        let string = s.replaceAll(nonalpha,'').toUpperCase()
        let l = 0
        let r = string.length - 1


        console.log(string)
        while(l<r){
            if(string[l]!==string[r]){
                return false
            }
            l+=1
            r-=1
        }
        return true
    }
}
