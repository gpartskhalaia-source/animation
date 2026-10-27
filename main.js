
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("ცხოველი გამოსცემს ხმას");
    }

    eat() {
        console.log(`${this.name} ჭამს`);
    }
}

// ძაღლის კლასი
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log("ჰამ! ჰამ!");
    }
}

// კატის კლასი
class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log("მიაუ!");
    }
}

// ობიექტების შექმნა
const animal = new Animal("ცხოველი");
const dog = new Dog("ბობი");
const cat = new Cat("მია");

// მეთოდების გამოძახება
animal.makeSound();
animal.eat();

dog.makeSound();
dog.eat();

cat.makeSound();
cat.eat();

// პოლიმორფიზმი
const animals = [dog, cat];

animals.forEach(animal => {
    animal.makeSound();
});
