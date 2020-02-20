/*SCOPO DEL GIOCO: Fizz Buzz test:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

//imposto un ciclo che mi prenda tutti i numeri da 0 a 100 compreso;
//imposto condizionali che mi permettano di operare sui multipli di 3 e sui multipli di 5
// stampo risultati in console e html

for (var numero = 1; numero <= 100; numero++) {
    if ((numero % 3 == 0) && (numero % 5 == 0)) {
        console.log('FizzBuzz');
        document.getElementById('lista-pazzi').innerHTML+= '<li class="frizzi-pazzi">FizzBuzz</li>';
    } else if (numero % 3 == 0) {
        console.log('Fizz');
        document.getElementById('lista-pazzi').innerHTML+= '<li class="frizzi">Fizz</li>';
    } else if (numero % 5 == 0) {
        console.log('Buzz');
        document.getElementById('lista-pazzi').innerHTML+= '<li class="pazzi">Buzz</li>';
    } else {
        console.log(numero);
        document.getElementById('lista-pazzi').innerHTML+= '<li class="nofrizzi-nopazzi">' + numero + '</li>';
    }
}
