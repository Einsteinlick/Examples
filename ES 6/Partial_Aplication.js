'use strict';
const partial = function(fn,x){
    return(function(...args){
        return(fn(x,...args));
    })
};

const volume  = function(height,lenght, weight ){
    return (
        height * lenght*weight
    )
}
const f1 = partial(volume,10);
const f2 = partial(f1,20)
const f3  = partial(f2,10);
console.log(f3());