// საწყისი მონაცემები
const products = ["Laptop", "Phone", "Headphones", "Keyboard", "Mouse"];
const prices = [2500, 1800, 250, 150, 80];


// 1. Function Declaration — პროდუქტის მოძებნა

function findProduct(product) {
    if (products.includes(product)) {
        console.log(product + " is available");
    } else {
        console.log("Product is not available");
    }
}

findProduct("Phone");
findProduct("Tablet");


// 2. Function Expression — 20% ფასდაკლება

const calculateDiscount = function(price) {
    return price * 0.8;
};

console.log(calculateDiscount(2500));


// 3. Arrow Function — ძვირადღირებული პროდუქტები

const isExpensive = (price) => {
    if (price > 1000) {
        return "Expensive";
    } else {
        return "Affordable";
    }
};

prices.forEach((price) => {
    console.log(price + " → " + isExpensive(price));
});


// 4. forEach() — პროდუქტების ჩვენება

products.forEach((product, index) => {
    console.log((index + 1) + ". " + product);
});


// 5. forEach() — პროდუქტები და ფასები

products.forEach((product, index) => {
    console.log(product + " - " + prices[index] + " GEL");
});


// 6. map() — ახალი ფასების შექმნა

const discountedPrices = prices.map((price) => {
    return price * 0.8;
});

console.log(discountedPrices);