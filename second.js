let products = ["Apple", "Banana", "Orange"];

// 1. ბოლოში Mango დამატება
products.push("Mango");
console.log(products);

// 2. დასაწყისში Strawberry დამატება
products.unshift("Strawberry");
console.log(products);

// 3. ბოლო ელემენტის წაშლა
products.pop();
console.log(products);

// 4. პირველი ელემენტის წაშლა
products.shift();
console.log(products);

// 5. არის თუ არა Banana
console.log(products.includes("Banana"));


let age = 18;

let result = age >= 18
    ? "Entry allowed"
    : "Entry denied";

console.log(result);