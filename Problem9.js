/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let start = 0
    let end = nums.length - 1;

    while (true) {

        let mid = start + Math.floor((end - start) / 2); 

        let left_sorted = false, right_sorted = false;

        if (nums[start] <= nums[mid])
            left_sorted = true;

         if (nums[mid+1] <= nums[end])
            right_sorted = true;
        

        // target found at mid
        if (nums[mid] === target)
            return mid;
 
        // value is in the first half of the array and is sorted
        else if (left_sorted && target >= nums[start] && target <= nums[mid])
            end = mid; 
 
        // value is in the second half of the array and is sorted
        else if (right_sorted && target >= nums[mid + 1] && target <= nums[end]) 
            start = mid + 1;

        // array is in order but value is not found
        else if (left_sorted && right_sorted)
            return -1;

        // val prob exist in the right
        else if (left_sorted && !right_sorted )
            start = mid + 1;
        
        // val prob exist in the left
        else if (!left_sorted && right_sorted )
            end = mid; 
        else
             return -1;
    }
};