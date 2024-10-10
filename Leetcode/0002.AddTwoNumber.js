/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;
        const sum = carry + x + y;
        // We sum the current digits from both lists and the carry

        carry = Math.floor(sum / 10);
        // update the carry for the next iteration (Math.floor(sum / 10))
        current.next = new ListNode(sum % 10);
        // create a new node with the ones digit of the sum (sum % 10)
        current = current.next; 
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        // We move to the next nodes in both lists (if they exist)
    } 

    if (carry > 0) {
        current.next = new ListNode(carry);
        // After the main loop, if there's still a carry, we add a new node for it
    }

    return dummyHead.next;
    //the new items are adding to the dummyHead, so when use .next we are going through the items from number generation 
    
};
