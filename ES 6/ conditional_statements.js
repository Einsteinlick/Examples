'use strict';
let counter =10;
if (counter>0){
    console.log('One if  == true ')
}
counter = -5;
if (counter>0 ){
    console.log('Second if  == true ')
}
else{ 
    console.log('Second if  == false')

}

counter =0; 
if(counter>0){
    console.log('Counter >0');
}
else if(counter<0){
    console.log('Counter <0');
}
else {
    console.log('Counter =0');
}

 const color  = 'red';
 switch(color){
 case 'red' :
 console.log('You like red?');
 break;
 case 'orange' :
 console.log('You like orange?');
 break;
 case 'black':
 console.log('You like black?');
 break;
 case 'green' :
 console.log('You like green?');
 break;
 default: 
 console.log('You like white?');
 break;
 }

 

 const a = 4 ;
 const b = 5 ;
 a>b ? console.log('a>b') : console.log('b>a');