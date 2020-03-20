 // Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

 var num1 = parseInt(prompt("Inserisci il primo numero"));
 var num2 = parseInt(prompt("Inserisci il secondo numero"));
 var num3 = parseInt(prompt("Inserisci il terzo numero"));
 var num4 = parseInt(prompt("Inserisci il quarto numero"));
 var num5 = parseInt(prompt("Inserisci il quinto numero"));
 var somma = num1 + num2 + num3 + num4 + num5;

 document.getElementById('my_id').innerHTML = "la somma dei numeri è " + somma;
