/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(!p && !q){
            return true
        }
        // if((!p && q) || (p && !q)){
        //     return false
        // }
        let v1 = p ? p.val : null 
        let v2 = q ? q.val : null 
        let l = (p && q) ? this.isSameTree(p.left,q.left) : false
        let r = (p && q ) ? this.isSameTree(p.right,q.right) : false
        return (v1==v2) && l && r

    }
}
