console.log('Test1:');
let firstData = prompt('Enter a value of product - ');
let secondData = prompt('Enter a value of discount -');
let valueProduct = Number(firstData);
let valueDiscount = valueProduct * Number(secondData/100);
let totalPrice = valueProduct - valueDiscount;
console.log('value of product = ' + " " + valueProduct);
console.log('value of the discount = ' + " " + valueDiscount);
console.log('total price = ' + " " + totalPrice);
console.log('------------------------------------------------');
console.log('Test2:');
let userName = prompt('Enter your name - ');
let userAge = prompt('How old are you ?');
console.log('Your name is - ' + userName + ' you are - ' + userAge + ' years old.');
console.log('---------------------------------------------------');
console.log('Test3:');
let sizeSideA = prompt('Enter size side A - ');
let sizeSideB = prompt('Enter size side B - ');
let squareRectangle = Number(sizeSideA) * Number(sizeSideB);
console.log('side A = ' + sizeSideA + ' side B = ' + sizeSideB + ' sqare the rectangle = ' + squareRectangle);
