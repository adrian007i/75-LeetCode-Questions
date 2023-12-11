

// hash set solution 
var hasCycle = function(head) {

    let set = new Set();
 
    while(head){
        if(set.has(head))
           return true;
        else
            set.add(head) 

        head = head.next; 
    } 
    return false;
};

// Tortoise and Hare solution
var hasCycle = function(head) {
 
    let slow = head;
    let fast = head;
 
    while(fast && fast.next){ 
        if(slow = head){
            return true
        }

        slow = slow.next;
        fast = fast.next.next;

    }

    return false
};