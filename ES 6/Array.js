'use strict';

const array = [1,2,3,5,4,6,7,8];
const array1 = new Array(10);
const array2 = [
     [1,2,3]
    ,[4,5,6]
    ,[7,8,9]
];
console.log('Длина массива :' +array1.length);
for (const i in array ){
    let value = array[i];
    console.log('Индекс елемента :' +i+'\t' + 'Значение елемента :' +'\t' + value)
}
/*
array.forEach(function(element,item,arr ){
   console.log('Индекс елемента :' +item+'\t' + 'Значение елемента :' +'\t' + element+'\t'+ arr) 
}); */
array.push('9');
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);
array.unshift(1);
console.log(array);
console.log(array.indexOf(2));
console.log(array.slice(1,6));
const array3 = [1,2];
const array4=[3,4];
const array5=[5,6,7];
console.log(array3.concat(array4,array5));
console.log(array);
console.log([...array3,...array4,...array5]);
/*
array.copyWithin(0,2,6);
console.log(array);*/
console.log('/////////////////////////////');
const array6 = array.entries();
console.log(array6.next().value);
console.log(array6.next().value);
console.log(array6.next().value);
console.log(array.every(function(element,index,array){
    return element  > 5  ;
}) );
console.log(array.some(function(element,index,array){
    return element  > 5  ;
}) );
/*
array.fill(3,0,5);
console.log(array);*/
console.log(array.filter(function(element){
    return element > 5;
}));

console.log(array. find(function(element){
    return element >10;
}));


console.log(array. findIndex(function(element){
    return element >5;
}))
/*
 console.log(array.flat());
 console.log(array,flatMap(function(element){
  return element ;
 })) ;
*/
console.log(array.includes(0));
console.log(array.join(' , '));

const array7 = array.keys();
console.log(array6.next().done);
console.log(array6.next().value);
console.log(array6.next());
console.log(array.lastIndexOf(5));
console.log(array.map(function(element,item,arr ){
    return(console.log('Индекс елемента :' +item+'\t' + 'Значение елемента :' +'\t' + element+'\t'+ arr)); 
 }));

 console.log(array.reduce(function(prevelem,currentelem){
     console.log(prevelem,currentelem);
return prevelem + currentelem;
 }));
 console.log(array.reduceRight(function(prevelem,currentelem){
    console.log(prevelem,currentelem);
return prevelem + currentelem;
}));
 array.reverse();
 console.log(array);
 array.reverse();
 console.log(array);
 console.log(array.slice(1,4));//не изменяет
array.sort();
console.log(array);
/*
array.splice(1,3)
console.log(array);*/
const a=9;
const b ='hello';
const array8 = [a,b,5];
console.log(array8.toLocaleString());
console.log(array.toString());
/*console.log(array.toSource());*/
const value =  array.values();
console.log(value.next());
console.log(value.next());


const array9 =  [1 ,2,3];
array9[a]=100;
array9[Symbol('name')] =20;
console.log(array9);