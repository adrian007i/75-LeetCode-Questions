// https://leetcode.com/problems/valid-parentheses/
// input : s : string
// output: boolean

var isValid = function(s) {
    let stack = [s[0]];

    let bracket_map = {
        "(":")",
        "[":"]",
        "{":"}"
    }

    for (let i = 1; i < s.length; i++){

        let peak_stack = stack[stack.length - 1];
        
        if(bracket_map[peak_stack] === s[i])
            stack.pop()
        
        else
            stack.push(s[i]);
    }

    return stack.length === 0

     
};

console.log(isValid("()[]{}"));