// JavaScript only has one data type for numbers, both integers and decimals — you guessed it, Number
//   to round your number to a fixed number of decimal places, use the toFixed() method
// * Typecasting
// Converting to number data types
let myNumber = '69'; // which is a string bcz of quotes

Number(myNumber); // will convert it to number data type

// operator precedence — some operators are applied before others when calculating the result of a calculation
// Operator precedence in JavaScript is the same as is taught in math classes in school — Multiply and divide are always done first, then add and subtract (the calculation is always evaluated from left to right).
// If you want to override operator precedence, you can put parentheses round the parts that you want to be explicitly dealt with first. So to get a result of 6, we could do this:

// === equal to
//  !== not equal to
const ans = document.querySelector('#answer');
const txtInp = document.querySelector('#userInput');
const subBut = document.querySelector('#submit');
const rstBut = document.querySelector('#reset');

subBut.onclick = () => {
    const usrInp = Number(txtInp.value);
            if(usrInp== 69 ){
        ans.textContent='Yes!';
}
else{
    ans.textContent='No!';
}
}
rstBut.onclick = () => {
    txtInp.value = '';
    ans.textContent='';
}