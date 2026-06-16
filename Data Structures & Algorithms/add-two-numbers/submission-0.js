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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let list_1 = l1
        let list_2 = l2
        let temp = 0
        let temp_list = new ListNode()
        let result = temp_list

        while(list_1 || list_2){
            let v1 = list_1 ? list_1.val : 0
            let v2 = list_2 ? list_2.val : 0
            let sum = v1 + v2 + temp
            if(sum >= 10){
                temp_list.next = new ListNode(sum % 10)
                temp = 1
            }else{
                temp_list.next = new ListNode(sum)
                temp = 0
            }
            
            if(list_1){
                list_1 = list_1.next
            }
            if(list_2){
                list_2 = list_2.next
            }
            temp_list=temp_list.next
        }
        if(temp!=0){
            temp_list.next = new ListNode(temp)
        }

        return result.next

    }
}
