
// let price = prompt("what is the price of the product?");

// let quantity = prompt("How many?");

// let total = price * quantity;
// console.log(total);

// ვყიდულობთ ბილეთს, პოპკორნს, კოკა-კოლა
// გავაკეთოთ კალკულატორი რა თანხა უნდა გადაიხადოს მომხმარებელმა

// შექმენი JavaScript პროგრამა, რომელიც მომხმარებელს საშუალებას მისცემს, ონლაინ მაღაზიაში .

// პროგრამამ უნდა გამოთვალოსმაისურების ჯამური ღირებულებაჯინსების ჯამური ღირებულებაფეხსაცმლის ჯამური ღირებულებაკალათის საბოლოო თანხა
// მაგალითად:
// მაისური: 2 × 40 = 80 ₾
// ჯინსი: 1 × 80 = 80 ₾
// ფეხსაცმელი: 1 × 120 = 120 ₾

// საბოლოო თანხა: 280 ₾

let tshirt_price = Number(prompt("what is the price of tshirt"));
let tshirt_quantity = Number(prompt("what is the quantity of tshirt"));

let tshirt_total = tshirt_price *  tshirt_quantity;
console.log (tshirt_total);

let jeans_price = Number(prompt("what is the price of jeans?"));
let jeans_quantity = Number(prompt("what is the quantity of jeans?"));

let jeans_total = jeans_price *  jeans_quantity;
console.log (jeans_total);

let shoes_price = Number(prompt("what is the price of shoes?"));
let shoes_quantity = Number(prompt("what is the quantity of shoes?"));

let shoes_total = shoes_price *  shoes_quantity;
console.log (shoes_total);

let finalTotal = tshirt_total + jeans_total  + shoes_total;
console.log(finalTotal);

// ბონუს დავალება:(შეგიძლია ეს არ გააკეთო)
// დამატებითი გამოწვევა
// თუ მომხმარებლის კალათის საბოლოო თანხა , დაუმატე .

// let price_ticket= Number(prompt("what is the price of ticket"));
// let price_popcorn=Number(prompt("what is the price of popcorn"));
// let price_cola= Number(prompt("what is the price of cola"));

// let total=price_ticket + price_popcorn + price_cola;
// console.log(total);