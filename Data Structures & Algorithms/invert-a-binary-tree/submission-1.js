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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root){
            return null
        }
        // if(!root.left){
        // root.right = root.left
        // root.left = null
        // root.right=this.invertTree(root.right)
        // }
        // if(!root.right){
        // root.left = root.right
        // root.right = null
        // root.left=this.invertTree(root.left)
        // }
        // let temp = root
        // let t = this.invertTree(temp.left)
        // temp.left = this.invertTree(temp.right)
        // temp.right = t
        let temp = this.invertTree(root.left)
        root.left = this.invertTree(root.right)
        root.right = temp
        return root
    }
}
