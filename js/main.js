// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// COSTRUISCO UN ARRAY DI 5 NUMERI RANDOM

var list_number = [];

while(list_number.length < 5) {
    var rnd_n = random_n(1,100);
    if (!list_number.includes(rnd_n)) {

        list_number.push(rnd_n);
        list_number.sort();
        
    }
    
}

//CHECK
console.log(list_number);

// TIMER DI 30 SEC


var notification = alert("Memorizza i numeri !! HAI SOLO 30 SECONDI! --> " + list_number);

setTimeout(function() {notification.close()}, 30000);

//FINALE
var n_user = [];
n_user.sort();
console.log(n_user); 
if (n_user.length == 0) {
    console.log('Non ne hai indovinato nessuno sei uno scarsone');
} 
else if (n_user.length == 5) {
    console.log('Bravo! Li hai indovinati tutti! I numeri erano : ' + n_user)
} 
else {
    console.log('Hai indovinato solo ' + n_user.length + ' numeri e sono: ' + n_user + "mentre i numeri da indovinare erano : " + list_number);
}


// FUNZIONE PER CHIEDERE I NUMERI ALL'UTENTE
function memory() {
    
    for (var i = 0; i < 5; i++) {
        var ask_n = parseInt(prompt("Inserisci un numero "));
        if (!n_user.includes(ask_n) && list_number.includes(ask_n)){
            n_user.push(ask_n);
        }
    }
     
}
// FUNZIONE PER DARTE UN NUMERO RANDOM
function random_n(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}