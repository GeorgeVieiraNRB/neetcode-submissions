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
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    sameNode(r, s){
        if(!r && !s) return true
        if(!r || !s) return false
        if(r.val != s.val ) return false
        return this.sameNode(r.left,s.left) && this.sameNode(r.right,s.right)

    }


    isSubtree(root, subRoot) {
        if (this.sameNode(root,subRoot)) return true
        let b = root.left ? this.isSubtree(root.left,subRoot) : false
        let c = root.right ? this.isSubtree(root.right,subRoot) : false
        return b || c 
    }
}
