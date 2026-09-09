const productPrice = 25;

let userName = prompt("What is your name?");

let quantity = Number(prompt("How many products would you like to buy?"));

let totalPrice = productPrice * quantity;

let money = Number(prompt("How much money do you have?"));

console.log(userName + ", the total price is " + totalPrice + " GEL.");

if (money >= totalPrice) {
    let change = money - totalPrice;

    console.log("You can buy the product.");
    console.log("Your change is " + change + " GEL.");
} else {
    console.log("You don't have enough money.");
}