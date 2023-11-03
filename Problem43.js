/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    // determine initial list we wanna splice into
    let l1 = list1, l2 = list2;
    if (list1 && list2 && list2.val <  list1.val) { l1 = list2; l2 = list1; }

    // return one list if the other is empty
    if (!l1) return l2;
    if (!l2) return l1;

    // keep pointer to track the start of l1 list 
    let result = l1;

    // iterate until l2 is empty
    while (l2) {
 
        // check if we have a list 1 and list 2 value
        if (l1 && l2) {

            // check if l1.val <= l2.val <= l2.next.val
            if (l1.val <= l2.val && l1.next && l2.val <= l1.next.val) {

                let l1_remainder = l1.next;
                l1.next = l2;

                let l2_remainder = l2.next;
                l2.next = l1_remainder;

                l2 = l2_remainder
                l1 = l1.next;
            } else {
                if (l1.next) l1 = l1.next;

                // reached the end of list 1
                else {
                    l1.next = l2;
                    break;
                }
            }

            // l2 val is not in the range of current and next node
        }
    }

    return result;

};