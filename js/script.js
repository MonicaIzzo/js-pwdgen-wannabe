console.log('JS OK')


/* 
1. Inserire tramite ID la password nell'elemento del DOM
2. Chiedere all'utente il suo nome
3. Chiedere all'utente il suo cognome
4. Chiedere all'utente il suo colore preferito
5. Generare la string
 
*/ 

// # 1
const GeneratePassword = document.getElementById ('GeneratePassword');
const ending = '21';


// # 2
const firstName = prompt('Inserisci il tuo nome');
console.log(firstName);

// # 3
const lastName = prompt('Inserisci il tuo cognome');
console.log(lastName);

// # 4
const favoriteColor = prompt('Inserisci il tuo colore preferito');
console.log(favoriteColor);

// # 5
const password = firstName + lastName + favoriteColor + ending;
console.log(ending);
console.log(password);

// # 6
GeneratePassword.innerText = password;




