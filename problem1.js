const sentence = 'I am not a good boy';
const word = 'boY';

function findTheWord(sentence , word){
    const result = sentence.includes(word);
    return result;
}
console.log(findTheWord(sentence, word));