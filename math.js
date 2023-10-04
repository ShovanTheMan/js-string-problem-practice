const result = Math.pow(2, 4);
// console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
console.log(gap);
if(gap < 5){
    console.log('you guys can be friends');
}
else{
    console.log('you guys stay apart');
}
//float to fullnumber convert 

// ---------------
const number = 2.4598;
const fullNumber = Math.round(number);
console.log(fullNumber);

const result2 = Math.floor(456.259);
console.log(result2);

// ----------------

// console.log(Math.random());
// 

const random = Math.random()*6;
console.log(Math.round(random));

// 

for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}