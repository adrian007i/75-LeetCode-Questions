// https://leetcode.com/problems/valid-palindrome/submissions/

// input : s : string
// output : boolean


var isPalindrome = function (s) {

    let start = 0;
    let end = s.length - 1;
    let alpha_regex = /^[a-zA-Z0-9]+$/

    while (start < end) {
        let start_char = s[start];
        let end_char = s[end];


        let start_alpha = start_char.match(alpha_regex);
        let end_alpha = end_char.match(alpha_regex);


        // ensure alphanumeric
        if (start_alpha && end_alpha) { 
            if (start_char.toLowerCase() !== end_char.toLowerCase())
                return false; 
            start++;
            end--;
        } 
        else if (start_alpha)end--;
        else if (end_alpha) start++;
        else {start++; end--}
         
    }
 
    return true;


};


console.log(isPalindrome(" "));