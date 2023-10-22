// https://leetcode.com/problems/invert-binary-tree/

// input : root : linked list
// output : linkedlist


var invertTree = function(root) {

    if(!root.next)
        return root;

    const temp_left = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp_left);
    
    return root; 
};