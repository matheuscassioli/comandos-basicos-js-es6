class celular {   //método novo com EcmaScript6

    constructor(){

        this.cor ="preto";

    }

    ligar(){

        console.log("uma ligação")
        return "ligando";
    }
}

let objeto = new celular();

console.log(objeto.ligar());