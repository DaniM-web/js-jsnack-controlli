//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

//ask for words
var word1 = prompt("Scrivi una parola");
var word2 = prompt("Scrivi una seconda parola");
 console.log(word1.length + " " + word2.length);

// stabilisco in che ordine stampare le parole
if (word1.length > word2.length) {
 print = word2 + " " + word1;
} else {
  print = word1 + " " + word2;
}
 document.getElementById('my_id').innerHTML = print;
