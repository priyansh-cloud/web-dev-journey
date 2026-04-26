//  ------------>     Functions in JS

// -----> Function Definition

// function functionName( ) {
    //do some work
// }

// function myfunction( ) {
//     console.log(" Priyanshu is learning JS ");
// }

// ------> Function Call
// functionName( );

// myfunction();


// sum

// function sum(a,b){
//     console.log(a + b);
// }

// let input = prompt("enter the word");

let count = 0;

function countVowels(str){
    // banty, count
    for(const char of str){
        if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"  ){
            count++;
        }
        
    }
    return count;
}

    const countVow = (str) => {
         for(const char of str){
        if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"  ){
            count++;
        }
        
    }
    return count;
    }

    let arr = ["pune", "delhi", "mumbai"];
    arr.forEach((val, idx) => {
        console.log(val.toUpperCase(), idx);
    }) ;










