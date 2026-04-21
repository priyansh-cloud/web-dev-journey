
// --------------->   Print

//console.log("Started with JavaScript .");



// --------------->     // unary operator

// let a =5
// let b = 3

// console.log("a =", a, "b = ",b)
// console.log("a++ = " , a++)
// console.log(a)


// --------------->   comparsion operator

// let a = 5;
// let b = 2;

// console.log("a == b", a==b) //false


// --------------->   logical operator

// let a = 5;
// let b = 4;

// let cond1 = a>b; // true
// let cond2 = b<a; // true

// console.log("cond1 && cond2 = ", cond1 && cond2)


// --------------->   Conditional Statement

//    if statement

// let age = 19;
// if(age > 18){
//     console.log("can vote")
// }


// --------------->   ternary operator

// let age = 20;
// let result = age>18 ? "adult" : "not adult";
// console.log(result)


// --------------->   Q1  ---------> PROMPT

// let num = prompt("enter a no. = ");
// if(num % 5 == 0){
//     console.log(num, " multiple of 5");
// }else{
//     console.log("not multiple")
// }



// --------------->   for-of loop

// let string = "Banty";
// for(let i of string){
//     console.log(i)
// }

// let guess = prompt(" Guess the number from 1 to 5 = ");
// let num = 5;
//     while( guess != num ){
//          guess = prompt(" Try again, Guess the number from 1 to 5 = ");
//     }
//     console.log(" Congrats you won ")


let fullname = prompt("Enter your name");
let user = "@" + fullname + fullname.length;
console.log(user);
