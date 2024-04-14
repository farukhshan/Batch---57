"use strict";
//Task 1: Assign "Hello, World!" to this variable and print it.
let greeting = "Hello , world!";
console.log(greeting);
//task2: Assign integer values and perform arithmetic operations.
let num1 = 5;
let num2 = 10;
console.log(`Calculation of sum ${num1 + num2}`);
console.log(`Calculation of Substraction ${num1 - num2}`);
console.log(`Calculation of Division ${num1 / num2}`);
console.log(`Calculation of Multiplication ${num1 * num2}`);
//task3: Swap these values without using a new variable.
let a = 1;
let b = 2;
a = a + b;
b = a - b;
a = a - b;
console.log("a=", a);
console.log("b=", b);
//task 4: let message: string; // Now try assigning a number to it and see what happens.
// let message: string = 1; // error occur
// let message: string = true; // error occur, we cant assign boolean or number to string variable
//task 5: let num1, num2; // Use the modulus operator (%) to find the remainder.
console.log(`Remainder of num1 or num2 is ${num1 % num2}`);
// task 6: let counter = 0; // Increment this value by 1 in two different ways.
let counter = 0;
counter += 1; //first method
counter++; // second method
// task 7: let a = true, b = false, c = true; // Write expressions using these.
let a1 = true;
let b2 = false;
let c3 = true;
a1 && b2 && c3; //and expression
a1 || b2 || c3; //or expression
// !a1 !b2; !c3; //not expression
// task 8: let num = 10; // Use +=, -=, *=, and /= on this variable.
let num = 10;
num += 10;
console.log(num);
num -= 10;
console.log(num);
num *= 10;
console.log(num);
num /= 10;
console.log(num);
// task 9: let num; // Determine if this is even or odd.
let number = 10;
let v = number % 2;
if (v === 0) {
    console.log(`${number} number is even`);
}
else {
    console.log(`${number} number is odd`);
}
// task 10: let age; // Check if age is 18 or older to determine voting eligibility.
let age;
let currentYear = 2024;
let burthYear = 2004;
age = currentYear - burthYear;
if (age >= 18) {
    console.log(`Congragulation, You're eligible for vote`);
}
else {
    console.log(`Sorry. you are not eligible for vote`);
}
// task 11: let score; // Use conditionals to assign and print grades A, B, C, D, or F.
let score = 45;
let grade;
if (score >= 90 || score <= 100) {
    grade = "A+";
}
else if (score >= 80 || score <= 89) {
    grade = "A";
}
else if (score >= 79 || score <= 79) {
    grade = "B";
}
else if (score >= 60 || score <= 69) {
    grade = "c";
}
else if (score >= 50 || score <= 59) {
    grade = "C";
}
else {
    console.log("fail");
}
console.log(`the grade is`, grade);
// task 12:let x, y, z; // Determine the largest among these.
let x = 10;
let y = 5;
let z = 3;
if (x > y && x > z) {
    console.log("x is greator then others");
}
else if (y > x && y > z) {
    console.log("y is greator then others");
}
else {
    console.log("z is greator then others");
}
// task 13: let year; // Determine if this is a leap year.
let year = 2024;
if (year % 4 == 0) {
    console.log("2024 year is a leap year");
}
else {
    console.log("2024 is not a leap year");
}
// task 14: let fahrenheit; // Convert this to Celsius and print the result.
let fahrenheit = 40.1;
let Celsius;
Celsius = ((fahrenheit - 32) * 5) / 9;
console.log(`The conversion of fahrenheit 40.1 into celcius is`, Celsius);
//task 15: let number; // Determine the sign of this number.
console.log(" nu is any number");
let nu;
nu = 21;
if (nu > 0) {
    console.log(`nu is a positive number , which is `, nu);
}
else if (nu < 0) {
    console.log(`nu is a negative number , which is `, nu);
}
else {
    console.log("nu is a neither positibe neither negative");
}
// task 16: let number; // Print the multiplication table for this number up to 10.
let nm = 10;
console.log(`10 * 1 =`, nm * 1);
console.log(`10 * 2 =`, nm * 2);
console.log(`10 * 3 =`, nm * 3);
console.log(`10 * 4 =`, nm * 4);
console.log(`10 * 5 =`, nm * 5);
console.log(`10 * 6 =`, nm * 6);
console.log(`10 * 7 =`, nm * 7);
console.log(`10 * 8 =`, nm * 8);
console.log(`10 * 9 =`, nm * 9);
console.log(`10 * 10 =`, nm * 10);
console.log("this is the Multiplication table of 10");
