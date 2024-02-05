// // Take a binary string
// // make function to count how many 0 are there
// // 



// function count_zero(binaryString){
//     if(typeof binaryString !== 'string'){
//         return "please provie a string type value"
//     }

//     let zero = 0;
//     for(const char of binaryString){
//         if(char === '0'){
//             zero++;
//         }
//     }
//     return zero;
// }

// const binaryString = '101010100110001000010101010'
// const zeros = count_zero(binaryString);
// console.log('there is', zeros , 'zeros in the string');

// COUNT A WORD IN A STRING

function countChar(name){
    if(typeof name !== 'string'){
        return 'Please prove Your name';
    }

    let counts = 0;

    for(const char of name.toLowerCase()){
        if(char === 'r'){
            counts++;
        }
    }
    return counts;
}

const name = 'Md.RrrrrronyRRRR Sorker';
const result = countChar(name)
console.log('there is ', result , 'times the char r is available');
// console.log(name);