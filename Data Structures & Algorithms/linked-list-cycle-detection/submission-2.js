/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**    
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let map = new Map()
        let fast = head?.next
        let slow = head
        let index = -1
        while( fast ){
            if(fast.val==slow.val) return true
            if(!map.has(slow.val)){
                map.set(slow.val,index)
            }
            else if(map.get(slow.val)!=index){
                return true
            }
            index+=1
            if(!fast.next) break
            slow = slow.next
            fast = fast.next 

        }
        return false

    }
}
