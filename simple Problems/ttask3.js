/**
    * Task-3:
    Write a function to count the number of vowels in a string.
 */

function checkVowel(strg){
    let count = 0;
    let strng = strg.toLowerCase();
    console.log(strng);
    for(const str of strng){
        if(str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u'){
            count++;
            console.log(str);
        }
    }
    console.log(count);
}
checkVowel('AejfifOjfU');
