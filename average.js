// Take an array of integers 
// Take the size of the array


function make_avg(array) {
    let sum = 0;
    for(const item of array){
        sum = sum + item;
    }

    const length = array.length;

    const average = sum / length;

    return average.toFixed(3);

    // console.log(sum);
}

const array = [4, 5, 8, 2, 9];
const output = make_avg(array);
console.log('the average is : ' , output);