// https://leetcode.com/problems/valid-anagram/description/
// input : s : string
// output : boolean
 
    
var isAnagram = function(s, t) {
    
    if (s.length !== t.length)
        return false;

    let smap ={};
    for (let i = 0; i < s.length; i++)  
        smap [s[i]] =  (!smap [s[i]] ? 1 :  smap [s[i]] + 1); 
    
    for (let i = 0; i < t.length; i++)  
        if(smap[t[i]] && smap[t[i]] > 0){
            smap[t[i]] = smap[t[i]] -1;
        }else{
            return false
        }     

    return true;
};

console.log(isAnagram("ab",  "b"));