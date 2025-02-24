/**
     * Task-4
    Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) 
    as parameter and count how many 0’s are there in that string.
 */

function count_zero(x){
    let count = 0;
    for(const num of x){
        if(num == 1){
            count++;
        }
    }
    return count;
}
const x = '001101001101100';
const res = count_zero(x);
console.log(res);