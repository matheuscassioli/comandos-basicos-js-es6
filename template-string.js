 let n = 7; 

for (let i = 0;  i <= 10;  i++){
    console.log(`${i}  X  ${n} = ${i * n}`);  // RECURSO PARA EMBUTIR STRINGS
}

// COMO ERA FEITO ANTES, QUANDO NAO TINHAMOS TEMPLATE-STRINGS

let n = 7; 

for (let i = 0;  i <= 10;  i++){
    console.log(i  + "X"  + n  + "=" + (i * n));   // CONCATENAVA
}