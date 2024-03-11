// // Pozdravení uživatele
// let vstup = prompt("Zadej svoje jméno:");
// console.log("Ahoj, tvoje jméno je " + vstup + ".");

// --------------------------------------------------

// // Tvorba řetězců prokládaných daty
// let scitanec1 = Number(prompt("Zadej první číslo:"));
// let scitanec2 = Number(prompt("Zadej druhé číslo:"));
// // Při spojování řetězců musíme být velmi opatrní z hlediska toho, kde začínají a kde končí které uvozovky a kde má být
// // operátor plus.
// console.log("Součet čísel " + scitanec1 + " a " + scitanec2 + " je " + (scitanec1 + scitanec2) + ".");
// // Stejného výsledku můžeme alternativně dosáhnout s použitím řetězcové šablony.
// console.log(`Součet čísel ${scitanec1} a ${scitanec2} je ${scitanec1 + scitanec2}.`);

// --------------------------------------------------

// // Načtení čísla od uživatele
// let hodina = Number(prompt("Zadej, kolik je hodin:"));
// if (hodina < 9) {
// 	console.log("Je ráno.");
// } else if (hodina < 12) {
// 	console.log("Je dopoledne.");
// } else if (hodina === 12) {
// 	console.log("Je poledne.");
// } else {
// 	console.log("Je odpoledne.");
// }

// --------------------------------------------------

// // Vypsání všech lichých čísel od 1 do 9
// for (let i = 1; i <= 9; i++) {
// 	if (i % 2 === 1) {
// 		console.log(i);
// 	}
// }
