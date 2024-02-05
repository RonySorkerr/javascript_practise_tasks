// Take a number
// Check if the number is odd or even
// If odd multiply it by 2
// Return the result
// If the number is even divide it by 2
// Return the result

function oddEven(number){
    if(number % 2 === 0){
        const result = number / 2;
        console.log('the number is EVEN');
        return result;
    }
    else if(number % 2 !== 0){
        const result = number * 2;
        console.log('the number is ODD');
        return result;
    }
}

const number = oddEven(46);
console.log('Your ans is : ' , number)
