let first_name = prompt ('inserisci il tuo nome');
let second_name = prompt ('inserisci il tuo cognome');
let color = prompt ('inserisci il tuo colore preferito');
let String =  `${first_name} ${second_name} ${color}`;
console.log(String);
document.getElementById('login').innerHTML = `${first_name} ${second_name} ${color} 23`;