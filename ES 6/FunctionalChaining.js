'use strict';
const curry = fn => args1=>args2=>args3=>args4 =>(fn(args1,args2,args3,args4));

const sum = function(...args){
    return (args.reduce(function(acc,thiselements){
        return (acc + thiselements);
    } ))
};
const newSum = curry(sum);
console.log(newSum(1)(2)(3)(4));