'use strict';
for(let counter = 0; counter<5 ; counter++){
    console.log(counter)
};
const obj= {
    name : 'Steve'
    ,age :'32'
    ,state :'Kyiv'
} 


for (  const i in obj   ){
    let value = obj[i];
    console.log(i+'\t'+value );

}

const array = [1,2,6,9,10] ;
for (const i in  array )
{
    let value = array[i];
    console.log(i+'\t'+value)
}
console.log('/////////////////////////////////////////////////////////////////////////////////')
for(const i of array){
    console.log(i)
}
console.log('/////////////////////////////////////////////////////////////////////////////////')
/*
let counter = 0;
for(; counter<5 ; counter++){
    console.log(counter)
};*/ 


/*
for(let counter = 0; counter<5 ; ){
    console.log(counter)
    counter++;
};*/


/*let counter = 0

for(; ; ){
    console.log(counter)
    counter++;
    if (counter = 5){
        break ;
    };
};*/


 let counter = 0;


while(counter<5)
{
    console.log(counter);
    counter ++;
};

do {
    console.log(counter);
    counter ++;
}while ( counter<5);
