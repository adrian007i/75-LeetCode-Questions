/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    let myMap = {}

    for (let word = 0; word < strs.length; word++) {
        let sortedStr = strs[word].split("").sort().join("");

        if (!myMap[sortedStr])
            myMap[sortedStr] = [strs[word]]
        else
            myMap[sortedStr].push(strs[word])
    } 

    let result = []
    for(let x in myMap){
        result.push(myMap[x])
    } 
    return result
}