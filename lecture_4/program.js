// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
	let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return vysledek;
}

const MAXIMALNI_POCET_POKUSU = 10;

let viteznyZvuk = new Audio("tada-fanfare-a-6313.mp3");

let tajneCislo = nahodneCislo(1, 100);
console.log("Tajné číslo je: " + tajneCislo);

let pocitadloPokusu = 0;
// Poznámka: tím, že jsme zavedli toto pole, bychom mohli proměnnou pocitadloPokusu z programu odstranit, protože bychom
// místo ní mohli používat vsechnyPokusy.length.
let vsechnyPokusy = [];

let nadpis = document.querySelector("#message");
let dolniHraniceElement = document.querySelector("#left-number");
let hvezdicka = document.querySelector("#star");
let horniHraniceElement = document.querySelector("#right-number");
let vstupniPolicko = document.querySelector("#number-input");
let odesilaciTlacitko = document.querySelector("#submit-button");
let restartujiciTlacitko = document.querySelector("#play-again-button");

odesilaciTlacitko.addEventListener("click", function () {
	pocitadloPokusu = pocitadloPokusu + 1;

	let hadaneCislo = Number(vstupniPolicko.value);
	vsechnyPokusy.push(hadaneCislo);
	console.log(`Všechny pokusy: ${vsechnyPokusy}.`);

	// Základní rozhodování se nám rozpadá na dvě situace:
	// * Buď hráč uhodl, a tedy hra končí jeho výhrou.
	// * Nebo hráč neuhodl.
	if (hadaneCislo === tajneCislo) {
		viteznyZvuk.play();
		nadpis.innerHTML = `Congratulations! You won! And you only needed ${pocitadloPokusu} guesses.`;
		odesilaciTlacitko.style.display = "none";
		restartujiciTlacitko.style.display = "inline-block";
		hvezdicka.style.filter = "drop-shadow(0 0 0.5em gold)";
	} else {
		// Hráč neuhodl. Zde máme tři situace:
		// * Hráč vypotřeboval svůj poslední pokus, a tedy hra končí jeho prohrou.
		// * Hráč ještě může pokračovat a jeho hádané číslo je nižší než naše tajné číslo.
		// * Hráč ještě může pokračovat a jeho hádané číslo je vyšší než naše tajné číslo.
		if (pocitadloPokusu === MAXIMALNI_POCET_POKUSU) {
			nadpis.innerHTML = `Sorry, you've used all ${pocitadloPokusu} of your guesses.`;
			odesilaciTlacitko.style.display = "none";
			restartujiciTlacitko.style.display = "inline-block";
		} else if (hadaneCislo < tajneCislo) {
			nadpis.innerHTML = `Too low! You have ${MAXIMALNI_POCET_POKUSU - pocitadloPokusu} guesses left.`;
			// Spodní mez ovšem chceme upravit pouze v případě, že hádané číslo není menší než aktuální mez.
			if (hadaneCislo + 1 > Number(dolniHraniceElement.innerHTML)) {
				dolniHraniceElement.innerHTML = hadaneCislo + 1;
			}
		} else {
			nadpis.innerHTML = `Too high! You have ${MAXIMALNI_POCET_POKUSU - pocitadloPokusu} guesses left.`;
			// Horní mez ovšem chceme upravit pouze v případě, že hádané číslo není větší než aktuální mez
			if (hadaneCislo - 1 < Number(horniHraniceElement.innerHTML)) {
				horniHraniceElement.innerHTML = hadaneCislo - 1;
			}
		}
	}
});

restartujiciTlacitko.addEventListener("click", function () {
	window.location.reload();
});
