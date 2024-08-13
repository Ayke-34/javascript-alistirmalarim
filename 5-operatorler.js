let number1 = 10;
let number2 = 20;
let number3 = 30;
let result;

//! 1- Aritmetik Operatorler
//? +, -, /, *, %, ++, --
result = number1 + number3;
result = number1 - number3;
result = number1 / number3;
result = number1 * number3;
result = number1 % number3;
//result = ++ number1;
//result = -- number2;

//! 2- Atama Operatorleri
//? =, +=, -=, /=, *=, %=
result= number1;
result += number2;
result -= number2;
result /= number2;
result *= number2;
result *= number2;

//! 3- Karsilastirma Operatorleri
//? =, !=, ===, >, <, >=, <=
result= number1==number2;
result= number1 != number2;  
result= 10 === "10";
result= number1>number2;
result= number1 <number2;
result= number1 >= number2;
result= number1 <= number2;

//console.log(result);

//! 4- Mantiksal Operatorler
//? &&: ve, ||: veya, !: tersi

// && ve: iki sarti da saglaması lazim
//console.log(number1 === number2 && number1 < number2);

// || veya : true icin bir sarti saglamasi yeterli
//console.log(number1 > number3 || number1 === number1);

//! tersi,
console.log(!(number1 > number3) && number2 >= number2);








