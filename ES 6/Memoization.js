'use strict';

const MemizedFactorial = function ( ){
    let cache = {};
    return (number) =>{
        if (cache[number] != undefined){
            console.log('Берём из кеша ');
            return cache[number];
        }
        else {
            console.log('Вычисляем и добавляем в кеш');
            let counter  = 1;
            for (let i = 1 ;  i <number +1;i++){
                counter = counter*i;
                cache[i]=counter;
            }
            return counter;
        }
    }
}; 
const newFactorial  = MemizedFactorial();
console.log(newFactorial(5));
console.log(newFactorial(5));
console.log(newFactorial(3));