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
            if( x == '[' ){
                st.push(']')
            }
            else if( x == '{' ){
                st.push('}')
            }
            else if( x == '(' ){
                st.push(')')
            }
            else{
                sz = st.length 
                if( sz == 0 || st[sz-1] != x){
                    return false
                }
                st.pop()
            }

        }
        return st.length == 0
    }
}
