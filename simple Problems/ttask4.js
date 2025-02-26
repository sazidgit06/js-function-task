/**
    * Task-4:
    Write a function to find the longest word in a given string.
    sample-input: I am learning Programming to become a programmer
    sample-output: Programming
*/

function checkString(strng){
    let len = 0;
    let longestWord = '';
    for(const str of strng){
        if(str.length > len){
            len = str.length;
            longestWord = str;
        }
    }
    console.log(longestWord);
}

let sample_input = "I am learning Programming to become a programmer";
let splitString = sample_input.split(' ');
checkString(splitString);