'use strict';
const add  =  (value) =>( value  + 5  );
const Multiply =(value) => (value *2) ;
const AddAfterMultiply = (value) => add(Multiply(value));
console.log(AddAfterMultiply(10));