'use strict';

const  name  = 'Friedrich';
const congratulation = function(){
    console. log('Hello  '+name );/// при вызове функции congratulation ,функция congratulation 
                                                      ///замыкаеться контекст той функции из которой она вызвана в
                                                      /// нашем случае congratulation вызываваеться в глобальной области видимости 
                                                    ////    и видит все переменные глобальной области видимости
}
congratulation();