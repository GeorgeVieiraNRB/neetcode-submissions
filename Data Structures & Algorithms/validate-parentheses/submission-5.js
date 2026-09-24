class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s) {
        let sz = s.length
        if(sz % 2 != 0){
            return false
        }

        let st = []
        for( let x of s ){
            console.log(x)
            if( x == '[' ){
                st.push(']')
                continue
            }
            if( x == '{' ){
                st.push('}')
                continue
            }
            if( x == '(' ){
                st.push(')')
                continue
            }
            
            if(st.length == 0 || st[st.length-1] != x){
                return false
            }
            st.pop()

        }
        return st.length == 0
    }
}
