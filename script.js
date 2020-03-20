//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

//ask for two number
var num1 = parseInt(prompt("Digita un numero"));
var num2 = parseInt(prompt("Digita un secondo numero"));

console.log("numeri scelti :" + num1 + " " + num2);

if (num1 > num2) {
  document.getElementById('my_id').innerHTML = "Il numero maggiore è " + num1;
} else if (num1 < num2) {
  document.getElementById('my_id').innerHTML = "Il numero maggiore è " + num2;
} else {
  document.getElementById('my_id').innerHTML = "I numeri selezionati sono uguali";
}
