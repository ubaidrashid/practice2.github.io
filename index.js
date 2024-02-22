
//alert
alert("welcome");

// 2. Variables for Strings:

var favouriteFood="fruits";
console.log(favouriteFood);

//3. Variables for Numbers:
let num1 = 10;
let num2 = 5;

// Perform addition
let additionResult = num1 + num2;
console.log("Addition Result:", additionResult);

// Perform subtraction
let subtractionResult = num1 - num2;
console.log("Subtraction Result:", subtractionResult);

// Perform multiplication
let multiplicationResult = num1 * num2;
console.log("Multiplication Result:", multiplicationResult);

// Perform division
let divisionResult = num1 / num2;
console.log("Division Result:", divisionResult);








// 4. Variable Names Legal and Illegal:

// Legal Variable Names

// snake_case_variable
let user_age = 25;
let total_score = 100;
let max_attempts = 3;

// camelCaseVariable
let userName = "JohnDoe";
let totalScore = 500;
let maxAttempts = 5;

// variable123
let count123 = 10;
let totalAmount56 = 200;
let room4Rent = "Apartment";

// Illegal Variable Names

// 123_variable
// let 123_user = "JohnDoe"; 
// SyntaxError: Unexpected token '123'

// illegal-variable
// let user-score = 75;
 // SyntaxError: Unexpected token '-'

// Variable@Name
// let user@name = "Alice";
 // SyntaxError: Unexpected token '@'


// 4:Math Expressions: Familiar Operators:

 // Define variables
let a = 10;
let b = 5;
let c = 3;

// Perform operations following BODMAS rule
let result = (a * b) / (b + c) - (a % c);
console.log("Result:", result);


// 6. Math Expressions: Unfamiliar Operators:

// Example 1: Finding the remainder of division
let dividend = 10;
let divisor = 3;
let remainder = dividend % divisor;
console.log("Remainder:", remainder);

let x = 5;
let y = x++; // post-increment: y is assigned the value of x (5) before x is incremented
console.log("Post-increment - x:", x); // Output: 6
console.log("Post-increment - y:", y); // Output: 5

let d= 10;
let e = ++a; // pre-increment: a is incremented before assigning its value to b
console.log("Pre-increment - d:", d); // Output: 11
console.log("Pre-increment - e:", e); // Output: 11


// 7. Concatenating Text Strings:

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);


//8:Prompts:

let userAge = prompt("Please enter your age:");

console.log("User's Age:", userAge);

//9: if statements:

let userInput = prompt("Please enter a number:");

userInput = parseInt(userInput);

if (userInput % 2 === 0) {
    console.log("The number " + userInput + " is even.");
} else {
    console.log("The number " + userInput + " is odd.");
}

//10. if...else and else if statements:

// Prompt the user to enter a numerical grade
let numericalGrade = parseFloat(prompt("Enter your numerical grade:"));

let letterGrade;
if (numericalGrade >= 90) {
    letterGrade = "A";
} else if (numericalGrade >= 80) {
    letterGrade = "B";
} else if (numericalGrade >= 70) {
    letterGrade = "C";
} else if (numericalGrade >= 60) {
    letterGrade = "D";
} else {
    letterGrade = "F";
}

console.log("Your letter grade is: " + letterGrade);
