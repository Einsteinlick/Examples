'use strict';
const object ={
     property1: 1
    , property2:2
     ,property3:3

};
const object1  = new Object({
    property1: 1
   , property2:2
    ,property3:3

});

console.log(object);
console.log(object1);

/*const emptyObject = {};
const emptyObject1 = new Object; 
const emptyObject2 = new  Object(null);
const emptyObject3 = new  Object(undefined);*/

const object2 = {
    a:1
    ,b:2
    ,c:3
};
const object3  = Object.assign({},object2);//формирует новый обьект копируя все перечисляемые свойства у обьектов  
console. log(object3);                                  /// которые были переданы вторым и далее елементами причём , изменяться
                                                                     /// обьект который был передан первым елементом,могут передаваться примитивы

const object4  = Object.create(object2);
console.log(object4.a);
console.log(object4.b);
console.log(object4.c);
Object.defineProperties(object2,{
    'd':{
        value :4
        ,enumerable : false
        ,writable : true
    },
    'e':{
        value : 5 
        ,enumerable : true 
        , writable : true 
    }
});
Object.defineProperty(object2,'e',{ value :6
        , enumerable : true
        ,writable : true
});
console.log(Object.entries(object2));
Object.freeze(object3);
/*
object3.q = 20;
*/
/*
const array = [a,b,c,d,e,f];
const value =  array.values();
const object5 = Object.fromEntries(value);
console.log(object5); */
console.log(Object.getOwnPropertyDescriptor(object2,'a'));
/*
console.log(Object.getOwnPropertyDescriptors(object2,));
*/
console.log(Object.getOwnPropertyNames(object2));
object2[Symbol('name')]= 'someproperties';
console.log(Object.getOwnPropertySymbols(object2));
console.log(Object.getPrototypeOf(object2));
console.log(Object.is(null,null));
console.log(Object.isExtensible(object3));
console.log(Object.isExtensible(object2));
console.log(Object.isFrozen(object2));
console.log(Object.isFrozen(object3));
Object.seal(object2);
console.log(Object.isSealed(object2));
console.log(Object.keys(object2));
const object5 ={
    a:1
    ,b:2
    ,c:3
};
    /*
Object.preventExtensions(object5);
object5.d = 5 ;*/

console.log(object2.hasOwnProperty('a'));
