'use strict';
const sum = new Function('a','b','return a+b');
console.log(sum(2,4));

function sum1(a,b){
    return(console.log(a+b));
};
const sum2 = function(a,b){
    return(console.log(a+b));
}

sum1(2,4);
const sum3 = (a,b) => {
    return(console.log(a+b));
};
const sum4  = (a,b)=>(console.log(a+b));
(function sum5(a,b){
    console.log(a+b);
})(2,4);
console.log(sum1.length);
console.log(sum1.name);