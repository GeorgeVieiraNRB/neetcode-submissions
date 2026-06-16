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
     * @return {ListNode}
     */
    reverseList(head) {
        let temp = head
        let past = null
        let rev = new ListNode()
        while(temp!=null){
            if(temp.next==null){
                break;
            }
            else if(past==null){
                past = new ListNode(temp.next.val, new ListNode(temp.val))
            }
            else{
                past = new ListNode(temp.next.val,past)
            }
            temp=temp.next
        }
    
        return past ? past : head
    }
}
