'use strict';

class Add {
     constructor(counter){
         this.value = counter;
     }
     adder(number){
        this.value+=number;
        return this;
     }
     ViewRezult(){
         return(this.value);
     }
};
const Adder = new Add(5).adder(27).adder(16);
console.log(Adder.ViewRezult())