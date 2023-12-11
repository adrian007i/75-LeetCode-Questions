// https://leetcode.com/problems/reverse-linked-list/submissions/


// Iterative
var reverseListIterative = function(head) {

    if (!head  || !head.next)
        return head
    
    let prev = null;
    let curr = head;

    while(curr){
        let temp = curr.next;

        curr.next = prev;
        prev = curr;
        curr = temp
    } 

    return prev
    
};