//  const students = [
//     {
//         name: "Nino",
//         age: 18,
//         score: 95
//     },
//     {
//         name: "Giorgi",
//         age: 17,
//         score: 72
//     },
//     {
//         name: "Ana",
//         age: 19,
//         score: 88
//     },
//       {
//         name: "Ana",
//         age: 19,
//         score: 100
//     }
// ];

// // •  დაბეჭდოს პირველი სტუდენტის სახელი; 
// // •  შეცვალოს გიორგის ქულა; 
// // •  დაამატოს ახალი სტუდენტი; 
// // •  forEach()-ით დაბეჭდოს ყველა სტუდენტის სახელი; 
// // •  filter()-ით იპოვოს 80-ზე მაღალი ქულის მქონე სტუდენტები; 
// // •  map()-ით შექმნას მხოლოდ სტუდენტების სახელების ახალი მასივი; 
// // •  ფუნქციით გამოთვალოს საშუალო ქულა.

// //  console.log (students[0].name);
// //  students[1].score=78;
// //  console.log(students[1]);
// //  students.push(
// //     {
// //         name:"Ana",
// //         age:15,
// //         score:95
// //     }
// //  )
// //  console.log(students)
// // students.forEach(student =>{console.log(student.name)
// //    }
// // ); 

// //  const sucsesfulStudent = students.filter(student=>{
// //     return student.score > 80
// // }) 
// // console.log(sucsesfulStudent);

// // const sucsesfulStudent = students.filter(student=> student.score > 80) 
// // console.log(sucsesfulStudent);

// // const studentName = students.map(student=> student.name) 
// // console.log(studentName);

// // function score(){

// // } 
// // let total=0;
// // students.forEach(student=>{
// //     // total=total+student.score
// //     total+=student.score
// //  })
// // function score(students) {
// //     let total=0;
// //      students.forEach(student=>{
// //     // total=total+student.score
// //     total+=student.score
// //  });
// //     return total /students.length 

// // } 
// // console.log(score(students));

// მაგალითად:
// მაისური: 2 × 40 = 80 ₾
// ჯინსი: 1 × 80 = 80 ₾
// ფეხსაცმელი: 1 × 120 = 120 ₾

// საბოლოო თანხა: 280 ₾

// let tshirtPrise = Number(prompt('what is the price?'));
// let tshirtQuantity =Number(prompt('what is the quantity?'));

// let totalTshirt = tshirtPrise * tshirtQuantity;

// let jeansPrise = Number(prompt('what is the price?'));
// let jeansQuantity =Number(prompt('what is the quantity?'));

// let totalJeans = jeansPrise * jeansQuantity;

// let shoesPrise = Number(prompt('what is the price?'));
// let shoesQuantity =Number(prompt('what is the quantity?'));

// let totalShoes = shoesPrise * shoesQuantity;

// let totalall= totalTshirt + totalJeans +  totalShoes;

// console.log (totalall);

// alert ('გამარჯობა');

// const productPrice = 25;

// let username = prompt('what is your name?');

// let quantity = Number(prompt('how many products do you want to buy?'))

// let  totalPrice =  productPrice *  quantity;

// console.log(totalPrice);

// let money = Number(prompt('how much money do you have?'))



// if(money >= totalPrice) {
//     console.log('you are alowed to buy product')

//     let change =money - totalPrice;
//     console.log (change + 'ლარი');
// }else {
//     console.log('you are not alowed to buy product')
// }

// let day =3;

// switch (day) {
//   case  1:
//     console.log ('incorrect day')
//     break;
//   case 2 :
//      console.log ('incorrect day')
//      break;
//   case 3:
//     console.log ('correct day') 
//     break;  

// }



// let userName = ['nina','tekla', 'gvantsa', 'alex'];

// // userName.pop();
// // userName[2]= 'tato';
// // userName.push('gio')
// // userName.unshift('nika')
// // userName.shift()
// userName.includes('nina')
// console.log(userName.indexOf('nina'));

// 2)Ternary Operator
// შექმენი ცვლადი:let age = 18;
// Ternary operator-ის გამოყენებით შეამოწმე მომხმარებლის ასაკი.
// თუ ასაკი არის , გამოიტანე:შესვლა ნებადართულია
// სხვა შემთხვევაში:შესვლა აკრძალულია
// condition ? value1 : value2;

// let age = 18;

// age> 18? : enter is alowed;
// age <18? :enter is not allowed;

// console.log (age)

// let age = 16;

// let result = age >18
// ? "allow"
// : 'no allow';
// console.log (result);

// // let result = age >= 18
// //   ? "Allowed"
// //   : "Not allowed";

// // console.log(result);

// let age1 = 19;

// age1 >= 18
//   ? console.log("Enter is allowed")
//   : console.log("Enter is not allowed");

// 3) შექმენი პროდუქტების მასივი:let products = ["Apple", "Banana", "Orange"];
// შეასრულე შემდეგი მოქმედებები:1. დაამატე ელემენტი ბოლოში
// გამოიყენე:push()
// და დაამატე "Mango".2. დაამატე ელემენტი დასაწყისში
// გამოიყენე:unshift()
// და დაამატე "Strawberry".3. წაშალე ბოლო ელემენტი
// გამოიყენე:pop()4. წაშალე პირველი ელემენტი
// გამოიყენე:shift()5. შეამოწმე, არსებობს თუ არა კონკრეტული პროდუქტი
// გამოიყენე:includes()
// მაგალითად:products.includes("Banana")
// შედეგი უნდა იყოს true ან false.

// let products = ["Apple", "Banana", "Orange"];

// products.push('mango');
// products.unshift('straberry');
// products.pop();
// products.shift ();
// products.includes('pear');
// let product2= products.splice(1);
// console.log(product2);
// console.log(products.includes('pear'));
// console.log(products);

// let data ="hellowin";
// let result = data.includes ('e');
// console.log(result);

// for (let i=0; i < 5;  i++ ){
//     console.log (i)

// }

// for(let i=0; i <=10; i++) {
//     console.log ('love you')

// }

// for(let i=0; i<=20; i++){
//     if(i % 2 ===0 ){
//         console.log(i)

//     }

// }

// let frutis = ['apple', 'banana', 'mango', 'pear'];
// // for (let i=0; i<frutis.length; i++){
// //     console.log(frutis[i])
    
// // }

// for(let fruit of fruits ){
//     console.log(fruit)

// }

// for(let i=1; i<=10; i++){
//     if(i === 8){
//     break;
    
//     }
//     console.log(i);

// }

// for(let i=0; i<10; i++){
//     if(i === 8) {
//         continue;

//     }
//     console.log(i);

// }

// let number = 10;
// while(number <=17){
//     console.log(number);
//     number ++ ;

// }

// let password ='';
// while(password !== '1234'){
//     password=prompt('enter password');
// }
// alert('correct password');

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<5);

// function calculateTotal (price, quantity){
//     return price * quantity;

// }

// console.log(calculateTotal(100,2));

// function sayHello (){
//     console.log('hello')
// }
// sayHello()

// function sayHello(userName){
//     console.log(`hello ${userName}`)
// }
// sayHello('Gvantsa')

// function sayHello (userName){
//     console.log(`hello ${userName}`)
// }
// sayHello('gvantsa')

// let sum= function (a,b){
//     return a + b

// }
// console.log(sum(4,3));

// function sum1(c, m){
//     return c+m
// }
// console.log(sum1(4,4))

// let sum=(a,b)=>{
//     return a +b

// }
// console.log(sum(4,3))

// let sum2=(a,b)=>{
//     return a * b
// }
// console.log(sum2(5,7))

// let sum=(a, b)=>a+b
// let result=(sum(4,3))
// console.log(result)

// let numbers =[-1, -5, 5, 7, -3, 9];

// function sum () {
//     let newSum =0;

//     for(let number of numbers){
//         if(number >0 ) {
//             newSum= newSum + number

//         }

//     }

//     return newSum
// }

// console.log(sum());

// let numbers = [4, 7, -5, -3, 13, 17,-4, 25];

// function sum(){
//     let newSum=0;
//     for(let number of numbers){
//         if(number>=0){
//            newSum= newSum+number

//         }

//     }
//     return newSum
// }
// console.log(sum());

// let numbers = [2, 4, 6, 8];
// let result=numbers.map(num => num +2);
// console.log (result);

// let numbers= [4, 5, 7];

// // let result= numbers.map(num => num*2);
// // console.log(result);

// let result=numbers.map(nam => nam-1);
// console.log(result);

// let products =['tea', 'coffe', 'burger', 'sendvich'];

// let discounted =products.forEach(product => console.log(`ფასდაკლება ${product}`));

// const students = [
//     {
//         name:"nino",
//         age:18,
//         score:80
//     },

//     {
//         name:"alex",
//         age: 19,
//         score: 85
//     },
   
//      {
//         name:"gvantsa",
//         age: 21,
//         score: 95
//     },
// ];

// function score(students){
//     let total=0;
//     students.forEach(student => {
//         total+=student.score
        
//     });
//     return total/students.length


// };
// console.log(score(students));

// console.log(students[0].name);

// students.forEach(student =>{
//     console.log(student.name)
// });

// students.forEach(student => {
//     console.log(student.score)
// })

// let result= students.filter(student =>{
//     return student.score >80
// });

// console.log(result);

// let newStudents= students.map(student=> {
//     return student.name
// });
// console.log(newStudents);

// let newStudents=students.map(student=>student.name);
// console.log(newStudents);

// let sucsesfulStudent =students
// .map(student=>student.score >80)
// .filter(student=>student.name);
// console.log(sucsesfulStudent);

// let successfulStudents = students
//     .filter(student => student.score > 80)
//     .map(student => student.name);

// console.log(successfulStudents);

// let successfulStudents= students
// .filter(student=> student.score>80)
// .map(student=>student.name);
// console.log(successfulStudents);