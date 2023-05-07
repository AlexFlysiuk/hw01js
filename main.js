//1
let loginUser = prompt('Enter login: ');
let passwordUser = prompt('Enter password: ');
if (loginUser === 'admin' && passwordUser === '1111'){
    console.log(`Wellcome back ${loginUser} !`);
} else if (loginUser === 'admin' && passwordUser != '1111'){
    console.log(`${loginUser} incorrect password, try again`);
} else {
    console.log(`${loginUser} not registered in system, please create acc`);
}
console.log('--------------------------------------------');

//2
let userAge = Number(prompt('Please enter your age - '));
let controlAge = userAge > 18 ? true : false;
console.log(controlAge);

console.log('--------------------------------------------');

//3
let dayOfWeek = prompt('Today is? ');
switch (dayOfWeek){
    case 'monday':
    case 'Monday':
    case 'MONDAY':
    case 'понеділок':
    case 'Понеділок':
    case 'ПОНЕДІЛОК':    
        console.log(`If today is ${dayOfWeek} - lesson started at 19:00`);
        break;
    case 'Wednesday':
    case 'wednesday':
    case 'WEDNESDAY':
    case 'Середа':
    case 'СЕРЕДА':
    case 'середа':
        console.log(`If today is ${dayOfWeek} lesson started at 19:00`);
        break;
    default:
        console.log(`Today is ${dayOfWeek} - No lesson today, have a good rest`);        
}
console.log('--------------------------------------------');

//4
let firstNumber = Number(prompt('Enter first number - '));
let secondNumber = Number(prompt('Enter second number - '));
let operation = prompt('Enter the operation (+) or (-) or (*) or (/) - ');
if(operation === '+'){
    console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
} else if(operation === '-'){
    console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
} else if(operation === '*'){
    if (firstNumber === 0 || secondNumber === 0){
        alert('If you want * or / number on 0 - you always get 0 in result :) ');        
    }
    console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
} else if(operation === '/'){
    console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
    if (firstNumber === 0 || secondNumber === 0){
        alert('If you want * or / number on 0 - you always get 0 in result :) ');        
    }
}
console.log('--------------------------------------------');

//5
let productPrice = Number(prompt('Write a product price: '));
if (productPrice >= 1000 && productPrice < 3000){
    console.log(`Product price = ${productPrice}, your discount is 2 % `);
} else if (productPrice >= 3000){
    console.log(`Product price = ${productPrice}, your discount is 5 % `);
} 
else{    
    console.log(`Product price = ${productPrice},insufficient amount for discount`);
}
console.log('--------------------------------------------');