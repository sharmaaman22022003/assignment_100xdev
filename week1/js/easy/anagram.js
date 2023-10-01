/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
var isAnagram = function(s, t) {
    if(s.split("").sort().join() == t.split("").sort().join()){
        return true;
    }
    else 
        return false;
    

};
console.log(isAnagram("ankur","rukna"))