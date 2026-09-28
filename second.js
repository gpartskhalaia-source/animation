const user1= {
    name:"Gvantsa",
    age:38
};

const user2= {
    hasCard:true,
    city:"Amsterdam"
};

const user={
    ...user1,
    ...user2,
    beakfeast:"cheescacke"
};
console.log(user);

