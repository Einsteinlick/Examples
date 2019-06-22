'use strict'
const SomeMan = {
    Firstname : 'William'
    ,Lastname : 'Shakespeare'
    ,State: 'Statefort'                
}
const  Log = function  ( name ){
    console.log('Hello  :' + name );
}
const mixin = function (obj) {
    obj.color = obj.color || 'white'; 
    obj.Printcolor = function(){
        console.log('Color ' +this.name+  ' is ' + this.color )
    };
};
mixin(SomeMan);    //// Mixin
mixin (Log);            //// Mixind decorator

SomeMan.Printcolor();
Log.Printcolor();