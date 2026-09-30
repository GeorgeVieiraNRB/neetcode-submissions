class Solution {
    cHght(root) {
        if (!root) {
            return 0
        }

        let hl = root.left ? this.cHght(root.left) + 1 : 0
        let hr = root.right ? this.cHght(root.right) + 1 : 0

        if (Math.abs(hl - hr) > 1) {
            this.isBalance = false
        }

        return Math.max(hl, hr)
    }

    isBalanced(root) {
        this.isBalance = true
        this.cHght(root)
        return this.isBalance
    }
}