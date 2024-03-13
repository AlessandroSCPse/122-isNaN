let userNumber = parseInt(prompt('dimmi un numero'));
console.log(userNumber);

// se userNumber è NaN facciamo alert con errore
// altirmenti Incrementarlo di 1 e stampare il risultato
// if(isNaN(userNumber) === true) {
//     alert('Hai inserito un valore non numerico');
// } else {
//     userNumber++;
//     console.log(userNumber);
// }

if(isNaN(userNumber) === false) {
    userNumber++;
    console.log(userNumber);
} else {
    alert('Hai inserito un valore non numerico');
}
