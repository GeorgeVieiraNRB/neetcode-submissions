class Solution {

    solution(){
        this.m = new Map()
    } 
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        
        let result = '';
        for(let i = 0;i<strs.length;i++){
            let word = strs[i]
            let size = word.length
            result+=`${size}#${word}`
        }

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        while (i < str.length) {
            let j = str.indexOf('#', i);
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            result.push(str.substring(i, i + length));
            i += length;
        }
        return result;
    }
}
