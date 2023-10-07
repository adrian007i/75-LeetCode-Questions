//  https://leetcode.com/problems/two-sum/
// input1: nums- array
// input2: target- int
// output: [i,i]- array



function twoSum(nums, target){
    let map = {}

    // place each value in a hash map and track its occurance and index
    nums.forEach((e,i) => {
        map[e] = i; 
    });
    for (let i = 0; i < nums.length; i++) { 
        let remain = target - nums[i]; 
        if(map[remain] && i != map[remain]){
            return [i, map[remain]];
        }
    } 

    return "No Result! ";
}
 

