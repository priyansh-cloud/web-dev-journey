
let heroes =["ironman", "spiderman", "superman", "batman"];

// ------------------> for Loop
// for(let i =0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }

// -----------------> for of loop
for(let el of heroes){ // el -> element
    // console.log(el);
    console.log(el.toUpperCase()); // for upper case
}

// -------------> practice 1 = find average
let num = [85,97,44,37,76,60];
let sum = 0;
for(let val of num){
    sum = sum + val;
    sum++;
    
}
let avg = sum/num.length;
console.log( `${avg} `); // avg [ litrals]

// -------------> practice 2
let prices = [250,645,300,900,50];
let off = 10/100;
let offpr;

let i =0;
for( let item of prices){
    offpr = item*off;
    item = item - offpr;
    console.log("price after offer =  "  + item);
    i++;
}

// -------------------> Array Methods
// starts with small leter
// Push() : add to end
// Pop() : delete from end & return
// toString() : converts array to string

let fooditems = ["mango", "apple", "cherry"];
fooditems.push("burgerr", "chips");

let deleted = fooditems.pop("chips");

console.log(fooditems);
console.log(fooditems.toString());
console.log("deleted : ", deleted)

// some more array methods
// Concat() : joins mulriple arrays & returns result
let marvel = ["ironman","spiderman","hulk"];
let Dc = ["superman", "batman"];

let heros = marvel.concat(Dc);


// unshift() : add to start --> similar to push
marvel.unshift("antman");

// shift() : delete from start & end --> pop
let val = marvel.shift();
console.log("deleted" , val);

console.log(heros);

// slice() : returns a piece of the array
// splice() : change original array(add,remove,replace)
// splice ( startidx, delCount, newEelement)
let arr = [1,2,3,4,5,6,7];

let value = arr.splice(2,2);// delete
console.log("deleted =", value, arr);

let addVal = arr.splice(5,0,100,110)// add
console.log("added ", addVal, arr)


// -----------------------> Practice 3
let companies = ["Bloomberg", "Microsoft", "Uber","google","IBM","netflix"];
companies.splice(0,1); //a
companies.splice(1,1,"ola");
companies.splice(5,0,"amazon")
console.log(companies);



