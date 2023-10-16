// https://leetcode.com/problems/product-of-array-except-self/
// input : nums: array
// output: array

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]


var productExceptSelf = function (nums) {
    let fwd_array = [1]; 
    let fwd_prod = nums[0];

    for (let i = 1; i < nums.length; i++) {
        fwd_array[i] = (fwd_prod);
        fwd_prod =  nums[i] * fwd_prod
    } 

    let back_array = []; 
    let back_prod = nums[nums.length - 1];

    for (let i = nums.length -2; i >= 0; i--) {
        back_array[i] = (back_prod);
        back_prod =  nums[i] * back_prod
    } 
    back_array.push(1)

    let final = [];  

    for (let i = 0; i < fwd_array.length; i++) { 
        final.push(fwd_array[i] * back_array[i]);
    } 
    return final
};

console.log(productExceptSelf([-1,1,0,-3,3]));
