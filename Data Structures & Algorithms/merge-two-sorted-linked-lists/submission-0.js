/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 *  
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        //let l1 = list1
        let run = new ListNode()
        let sto = run // 0 -> null
        let l1 = list1
        let l2 = list2
        while( l1 && l2 ){
            if(l1.val>l2.val){
                sto.next = l2
                l2 = l2.next
            }
            else{
                sto.next = l1
                l1=l1.next
            }
            sto=sto.next
            console.log(sto)
            console.log('-')
            console.log(run)
        }
        sto.next = l1 || l2
        return run.next
    }
}
