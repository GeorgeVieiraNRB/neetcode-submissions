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
     * @return {number}
     */
    constructor(temp = 0){
        this.temp = temp
    }

    max(a,b){
        return a>b?a:b
    }

    down(root){
        if(!root){
            return 0  
        }
        let l = this.down(root.left)
        let r = this.down(root.right) 
        this.temp = this.max(this.temp,(r+l))
        return this.max(r,l) + 1//
    }

    diameterOfBinaryTree(root) {
        this.down(root)
        return this.temp
    }
}
