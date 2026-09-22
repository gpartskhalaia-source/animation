// For Loop შექმენი რიცხვების მასივი:let numbers = [3, 7, 12, 18, 21, 30, 45]; for loop-ის გამოყენებით:დაბეჭდე ყველა რიცხვი.დაბეჭდე მხოლოდ ლუწი რიცხვები.დათვალე რამდენი რიცხვია 10-ზე მეტი.იპოვე რიცხვების ჯამი.Do...While Loop

let numbers = [3, 7, 12, 18, 21, 30, 45];

// Print all numbers
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Print only even numbers
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

// Count numbers greater than 10
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        count++;
    }
}

console.log("Numbers greater than 10:", count);

// Find the sum of all numbers
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log("Sum:", sum);

// შექმენი პროგრამა, რომელიც მომხმარებელს ეკითხება:შეიყვანე პაროლი: გამოიყენე do...while, რათა მომხმარებელს პაროლი მოეთხოვოს მანამ, სანამ სწორ პაროლს არ შეიყვანს. სწორი პაროლი იყოს:"3456" სწორი პაროლის შეყვანის შემდეგ დაბეჭდე:წვდომა დაშვებულია! არასწორი პაროლის შემთხვევაში:არასწორი პაროლი, სცადე თავიდან.

let password;

do {
    password = prompt("Enter password:");

    if (password !== "3456") {
        console.log("Incorrect password, try again.");
    }

} while (password !== "3456");

console.log("Access granted!");

// შექმენი ცვლადი:let text = "JavaScript is a powerful programming language"; გამოიყენე String მეთოდები და შეასრულე შემდეგი დავალებები:გამოიტანე ტექსტის სიგრძე — lengthგადაიყვანე ყველა ასო დიდ ასოებში — toUpperCase()გადაიყვანე ყველა ასო პატარა ასოებში — toLowerCase()შეამოწმე, შეიცავს თუ არა ტექსტი სიტყვას "programming" — includes()იპოვე სიტყვა "JavaScript"-ის მდებარეობა — indexOf()ამოჭერი ტექსტიდან "JavaScript" — slice()შეცვალე "powerful" სიტყვა "popular"-ით — replace()

let text = "JavaScript is a powerful programming language";

// Text length
console.log(text.length);

// Convert to uppercase
console.log(text.toUpperCase());

// Convert to lowercase
console.log(text.toLowerCase());

// Check if text contains "programming"
console.log(text.includes("programming"));

// Find the position of "JavaScript"
console.log(text.indexOf("JavaScript"));

// Extract "JavaScript"
console.log(text.slice(0, 10));

// Replace "powerful" with "popular"
console.log(text.replace("powerful", "popular"));