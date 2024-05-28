// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
	let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return vysledek;
}

window.addEventListener("load", function () {
	const MAXIMALNI_POCET_POKUSU = 10;

	let tajneCislo = nahodneCislo(1, 100);

	// Počítadlo všech pokusů
	let pocitadloPokusu = 0;
	// Pole obsahující dřívější pokusy hráče.
	// Poznámka: tím, že jsme zavedli toto pole, abychom mohli hráče informovat, že některé číslo už tipoval v minulosti,
	// bychom z programu proměnnou pocitadloPokusu mohli odstranit, protože její hodnota odpovídá hodnotě
	// pokusy.length + 1 (až do místa, kdy do pole na závěr přidáme aktuálně hádané číslo).
	let pokusy = [];

	let nadpis = document.querySelector("#message");
	let leveCisloElement = document.querySelector("#left-number");
	let hvezdicka = document.querySelector("img[src='star.svg']");
	let praveCisloElement = document.querySelector("#right-number");
	let vstupniPolicko = document.querySelector("#number-input");
	let hadaciTlacitko = document.querySelector("#submit-button");
	let resetovaciTlacitko = document.querySelector("#play-again-button");

	hadaciTlacitko.addEventListener("click", function () {
		pocitadloPokusu = pocitadloPokusu + 1;

		let hadaneCislo = Number(vstupniPolicko.value);

		// Základní rozhodování se nám rozpadá na tři situace:
		// * Buď hráč uhodl, a tedy hra končí jeho výhrou.
		// * Nebo hráč neuhodl a zároveň vypotřeboval svůj poslední pokus, a tedy hra končí jeho prohrou.
		// * Nebo hráč neuhodl, ale nebyl to ještě jeho poslední pokus.
		if (hadaneCislo === tajneCislo) {
			// Výhra
			nadpis.innerHTML = `You won and you needed only ${pocitadloPokusu} guesses!`;
			hvezdicka.style.filter = "drop-shadow(0 0 0.5em gold)";
			hadaciTlacitko.style.display = "none";
			resetovaciTlacitko.style.display = "inline-block";
		} else if (pocitadloPokusu === MAXIMALNI_POCET_POKUSU) {
			// Prohra
			nadpis.innerHTML = "Game over!";
			hadaciTlacitko.style.display = "none";
			resetovaciTlacitko.style.display = "inline-block";
		} else {
			// Hráč neuhodl, ale ještě mu zbývají další pokusy. Opět zde máme tři situace:
			// * Aktuální hádané číslo už hráč v minulosti tipoval, tak jej pouze na situaci upozorníme.
			// * Nebo toto číslo ještě nehádal, ale číslo je nižší než naše tajné číslo. Pak hráči dáme příslušnou
			//   nápovědu a upravíme zobrazovanou spodní mez.
			// * Nebo toto číslo ještě nehádal, ale číslo je vyšší než naše tajné číslo. Pak hráči dáme příslušnou
			//   nápovědu a upravíme zobrazovanou horní mez.
			if (pokusy.includes(hadaneCislo)) {
				nadpis.innerHTML = `You've already tried this one! You have ${
					MAXIMALNI_POCET_POKUSU - pocitadloPokusu
				} guesses left.`;
			} else if (hadaneCislo < tajneCislo) {
				nadpis.innerHTML = `Too low! You have ${MAXIMALNI_POCET_POKUSU - pocitadloPokusu} guesses left.`;
				// Spodní mez ovšem chceme upravit pouze v případě, že hádané číslo není menší než aktuální mez
				if (hadaneCislo >= Number(leveCisloElement.innerHTML)) {
					leveCisloElement.innerHTML = hadaneCislo + 1;
				}
			} else {
				nadpis.innerHTML = `Too high!  You have ${MAXIMALNI_POCET_POKUSU - pocitadloPokusu} guesses left.`;
				// Horní mez ovšem chceme upravit pouze v případě, že hádané číslo není větší než aktuální mez
				if (hadaneCislo <= Number(praveCisloElement.innerHTML)) {
					praveCisloElement.innerHTML = hadaneCislo - 1;
				}
			}
		}

		pokusy.push(hadaneCislo);
	});

	resetovaciTlacitko.addEventListener("click", function () {
		window.location.reload();
	});
});
