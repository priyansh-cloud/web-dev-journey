// alert("welcome to priyanshu's page") ;
let h3 = document.querySelector("h3");
console.dir(h3);
h3.innerText = h3.innerText + " from apna college ";

let divs = document.querySelectorAll(".box");
divs[0].innerText = "Priyanshu";
divs[1].innerText = "value 2";
divs[2].innerText = "value 3";

let idx = 1;
for( div of divs){
    div.innerText = `new value ${idx}`;
    idx++;
}
console.log(divs);

