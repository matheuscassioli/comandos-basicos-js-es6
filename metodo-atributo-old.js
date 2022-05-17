let celular = function(){ //método antigo antes do EcmaScript6
 
//let cor = "preto" 
this.cor = "preto"; // utilizando this eu transformo a variavel em um atributo

this.ligar = function(){  // tranforma a função em um método
    console.log("uma ligação");
    return "ligando";
    }

}

let objeto = new celular(); 

console.log(objeto.ligar()); 