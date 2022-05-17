var agora = Date.now(); // seta a data em segundos = time-stamp

console.log(agora);
 
/*--------------*/

var data = new Date();// seta a data atualizada e formatada

console.log(data); // imprimi a data em padrão americano

console.log(data.getDate()); // imprimi somente o dia

console.log(data.getUTCMonth()); // imprimi somente o mes 

console.log(data.getFullYear()); // imprimi somente o ano

console.log(data.getHours()); // imprimi somente a hora

console.log(data.getMinutes()); // imprimi somente os minutos

console.log(data.getSeconds()); // imprimi somente os segundos

console.log(data.toLocaleDateString("pt-BR")); // imprimi a data do local onde estao o navegador (no caso brasil)