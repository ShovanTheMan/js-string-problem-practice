function reverseString(text){
    let reversed = '';
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log(element,reversed);
    }
    return reversed;
}

const myString = 'I am A good boy';
const reversed = reverseString(myString);
console.log('reverse output:',reversed);