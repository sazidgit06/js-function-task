/**
    * task-2:
    You are given an array of numbers. 
    Count how many times the a number is repeated in the array.
    sample-input: numbers = [5,6,11,12,98, 5]
    find: 5
    output: 2
    sample-input:
    numbers = [5,6,11,12,98, 5]
    find: 25
    output: 0
 */

function countDuplicate(numbers,x){
    let newArr = [];
    for(const num of numbers){
        if(num === x){
            newArr.push(num);
        }
    }
    console.log(newArr.length);
}

const numbers = [5, 6, 11, 12, 98, 5];
countDuplicate(numbers,5);