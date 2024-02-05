// Take an integer value
// Checks if it even or odd
// If even returs even
// If odd returns odd

function odd_eve(values){
    if(values % 2 === 0){
        return 'EVEN';
    }
    else if(values % 2 !==0){
        return 'ODD';
    }
    return "please provide a number";
}

const number = 15;
const result = odd_eve(number);
console.log('the result is : ' , result);