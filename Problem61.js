// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

var maxDepth = function(root) {

    if(!root) return 0;

    let left_height = 1 + maxDepth(root.left);
    let right_height = 1 + maxDepth(root.right);
    


    return Math.max(left_height,right_height)
};