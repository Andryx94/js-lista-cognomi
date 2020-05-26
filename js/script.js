var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi']
var cognomeUtente = "";

while (!isNaN(cognomeUtente)) {
  cognomeUtente = prompt("Dimmi il tuo cognome");
  cognomi.push(cognomeUtente);
  cognomi.sort();
}

alert("Ecco la lista ordinata dei cognomi: " + cognomi);
alert("Il tuo cognome è in " + (cognomi.indexOf(cognomeUtente) +1) + "a posizione.");
