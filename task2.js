/**
    Task-2
    Take a number if the number is odd multiply it by 2 and return the result.
    If the number is even divide it by two and return the result.
 */

function operation(x){
    if(x % 2 == 0){
        x = x / 2;
        return x;
    }
    else{
        x = x * 2;
        return x;
    }
}

const res = operation(15);
console.log(res);