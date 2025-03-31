// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
	let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return vysledek;
}

const MAXIMALNI_POCET_POKUSU = 10;

let tajneCislo = nahodneCislo(1, 100);

let pocitadloPokusu = 0;
// Poznámka: tím, že jsme zavedli toto pole, bychom mohli proměnnou pocitadloPokusu z programu odstranit, protože bychom
// místo ní mohli používat pokusy.length.
let pokusy = [];

let nadpis = document.querySelector("#message");
let leveCisloElement = document.querySelector("#left-number");
let hvezdicka = document.querySelector("#star");
let praveCisloElement = document.querySelector("#right-number");
let vstupniPolicko = document.querySelector("#number-input");
let hadaciTlacitko = document.querySelector("#submit-button");
let resetovaciTlacitko = document.querySelector("#play-again-button");

hadaciTlacitko.addEventListener("click", function () {
	pocitadloPokusu = pocitadloPokusu + 1;

	let hadaneCislo = Number(vstupniPolicko.value);
	pokusy.push(hadaneCislo);
	console.log(`Všechny pokusy: ${pokusy}.`);

	// Základní rozhodování se nám rozpadá na dvě situace:
	// * Buď hráč uhodl, a tedy hra končí jeho výhrou.
	// * Nebo hráč neuhodl.
	if (hadaneCislo === tajneCislo) {
		nadpis.innerHTML = `You won and you needed only ${pocitadloPokusu} guesses!`;
		hadaciTlacitko.style.display = "none";
		resetovaciTlacitko.style.display = "inline-block";
		hvezdicka.style.filter = "drop-shadow(0 0 0.5em gold)";
	} else {
		// Hráč neuhodl. Zde máme tři situace:
		// * Hráč vypotřeboval svůj poslední pokus, a tedy hra končí jeho prohrou.
		// * Hráč ještě může pokračovat a jeho hádané číslo je nižší než naše tajné číslo.
		// * Hráč ještě může pokračovat a jeho hádané číslo je vyšší než naše tajné číslo.
		if (pocitadloPokusu === MAXIMALNI_POCET_POKUSU) {
			nadpis.innerHTML = `Game over! You've used all ${pocitadloPokusu} of your guesses.`;
			hadaciTlacitko.style.display = "none";
			resetovaciTlacitko.style.display = "inline-block";
		} else if (hadaneCislo < tajneCislo) {
			nadpis.innerHTML = `Too low! You have ${MAXIMALNI_POCET_POKUSU - pocitadloPokusu} guesses left.`;
			// Spodní mez ovšem chceme upravit pouze v případě, že hádané číslo není menší než aktuální mez.
			if (hadaneCislo >= Number(leveCisloElement.innerHTML)) {
				leveCisloElement.innerHTML = hadaneCislo + 1;
			}
		} else {
			nadpis.innerHTML = `Too high! You have ${MAXIMALNI_POCET_POKUSU - pocitadloPokusu} guesses left.`;
			// Horní mez ovšem chceme upravit pouze v případě, že hádané číslo není větší než aktuální mez.
			if (hadaneCislo <= Number(praveCisloElement.innerHTML)) {
				praveCisloElement.innerHTML = hadaneCislo - 1;
			}
		}
	}
});

resetovaciTlacitko.addEventListener("click", function () {
	window.location.reload();
});
