/**
    Task-3
    Write a function called make_avg() which will take an array
    of integers and the size of that array and return the average of those values.
 */

function make_avg(array){
    let sum = 0;
    let len = array.length;
    for(let arr of array){
        sum = sum + arr;
    }
    let avgarr = sum / len;
    return avgarr;
}
let numbers = [1,2,3,4,5];
let avg = make_avg(numbers);
console.log(avg);