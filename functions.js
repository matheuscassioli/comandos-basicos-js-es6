/*-------------function-c-chamada------------------*/
function(x1,x2, operator){  

    return eval(`${x1}  ${operator}  ${x2} ;`);/*função nativa do js de validar que a string pode ser "calculada"*/

}

let  resultado =  calc(1,3,"*");
console.log(resultado);  

/*-------------function-anonimous-------------------*/

(function(x1,x2, operator){  //não consegue chamar-pois ela estpa no anonimato

    return eval(`${x1}  ${operator}  ${x2} ;`);/*função nativa do js de validar que a string pode ser "calculada"*/

})(1,3,"*"); 


/*-------------arrow-function------------------*/

let calc =(x1,x2, operator) =>{  

    return eval(`${x1}  ${operator}  ${x2} ;`);/*função nativa do js de validar que a string pode ser "calculada"*/

}

let  resultado =  calc(1,3,"*");
console.log(resultado);  
