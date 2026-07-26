class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if( s.length !== t.length ){
            return false
        }
        
        let m = new Map()

        for (let x = 0; x < s.length; x++) {
            m.set(s[x], (m.get(s[x]) || 0) + 1);
        }

        for ( let x = 0 ; x < t.length ; x++ ) {
            let v = t[x]
            if(!m.has(v)){
                return false
            }
            m.set(v,m.get(v)-1)
            if(m.get(v)<0){
                return false
            }
        }
        return true
    }
}
