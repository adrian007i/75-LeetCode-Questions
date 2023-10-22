// https://leetcode.com/problems/maximum-subarray/
// input : nums : array
// output : integer


var maxSubArray = function(nums) {

    let max_sum = nums[0];
    let curr_sum = nums[0];

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] > curr_sum && curr_sum < 0)
            curr_sum = nums[i];
        else
            curr_sum += nums[i];


        if(curr_sum > max_sum)
            max_sum = curr_sum;
    }

    return max_sum;
    
};

console.log(maxSubArray ([8,-19,5,-4,20])); 
console.log(maxSubArray ([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray ([1,2,5]));