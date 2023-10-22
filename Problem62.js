// https://leetcode.com/problems/same-tree/
// input : p : bst
// input : q : bst
// output : boolean


var isSameTree = function(p, q) {
    if (!q && !p)
        return true; 
    if ((!p && q) || (p && !q) || (p.val !== q.val))
        return false;
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);    
};