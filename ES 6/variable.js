'use strict';

/*function Somethingsfunction (){
    var newvalue = 0;
    for (var j = 0; j<10;j++  )
    {
        var newvalue = j;
        console.log(newvalue);/0,1,2,3,4,5,6,7,8,9

    }
    console.log(newvalue);/9
}
Somethingsfunction();
console.log(newvalue);//undefined 
*/

/*function Somethingsfunction (){
    var  newvalue = 0;
    for (var j = 0; j<10;j++  )
    {
        let newvalue = j;
        console.log(newvalue);//0,1,2,3,4,5,6,7,8,9

    }
    console.log(newvalue);//0
}
Somethingsfunction();
console.log(newvalue);//undefined
*/
/*function Somethingsfunction (){
    var  newvalue = 0;
    if(true){
        const newvalue = 1;
        console.log(newvalue); //1
        //newvalue = 4;//Error newvalue is const
    }
    console.log(newvalue);//0
}
Somethingsfunction();
console.log(newvalue)//undefined
*/
const somethingsundefined  = undefined;
console.log('Type undefined :' + typeof somethingsundefined);
const somethingsnull = null ;
console.log('Type null  :' + typeof somethingsnull);
const somethingsNaN = NaN;
console.log('Type NaN :' + typeof somethingsNaN);
const somethingsInfinity = Infinity;
console.log('Type Infinity :' + typeof somethingsInfinity);
const somethingsint = 0 ; 
console.log('Type int   :' + typeof somethingsint);
const somethingsfloat = 1.2 ;
console.log('Type float :' + typeof somethingsfloat);
const somethingsboolean = true;
console.log('Type true :' + typeof somethingsboolean);
const somethingsstring = 'Hello';
console.log('Type "Hello " :' + typeof somethingsstring);
const somethingssymbol=Symbol('Hello');
console.log('Type symbol :' + typeof somethingssymbol);
const somethingsbigint = Number.MAX_SAFE_INTEGER+1;
console.log('Type bigint :' + typeof somethingsbigint);




const somethingsObject ={
    notundefinded : undefined
    ,nothing : null 
    ,NotANumber : NaN
    ,infinity : Infinity 
    ,int_number :1 
    ,float_number : 1.2
    ,Boolean_ : true
    ,string : 'Hello'
    ,[Symbol('somethingssymbol')]:[Symbol('somethingsvalue')]
    ,array : []
    ,object : {}
    ,_getter : 'default value'
    , get getter(){
        return this._getter;
    }
    ,set getter(value){
        this._getter = value ;
    }
}

console.log('Type objectt :' + typeof somethingsobj);
Object.defineProperty(somethingsObject,"float_number",{
    value : '2,5'
    , writable: true
    ,enumerable: true
    ,configurable: true
})
console.dir(somethingsObject);
const somethingdfunction = function ( x,y){
    return(x+y);
} 

console.log('Type function :'  + typeof somethingdfunction) ;
const somethingsarray =[];
console.log('Type array :' + typeof somethingsarray);

