let carros = ["palio 98","marea","uno","toro","strada",new Date()];

console.log(carros.length); // quantidade de elementos no array

console.log(carros[1]) // imprimi o objeto na posicão 1 (existe o 0)

console.log(carros[5].toLocaleDateString("pt-BR")) // imprimi o objeto na posicão 5 puxando a data


/*--------------forEach------------- */


carros.forEach(function (value, index){ // cria uma função para percorrer seu array e suas posiçoes

    console.log(index,value); 

});