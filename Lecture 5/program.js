// Tipuje číslo od minimum (včetně) do maximum (včetně).
function tipniCislo(minimum, maximum) {
	// return maximum;
	// return minimum;
	// return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return Math.floor((minimum + maximum) / 2);
}

// Zformátuje počet pokusů společně se slovem „pokus“ ve správném tvaru.
function zformatujPocetPokusu(pocetPokusu) {
	if (pocetPokusu === 1) {
		return "1 pokus";
	} else if (pocetPokusu < 5) {
		return `${pocetPokusu} pokusy`;
	} else {
		return `${pocetPokusu} pokusů`;
	}
}

window.addEventListener("load", function () {
	// nastavení hodnot proměnných vyjadřujících stav hry
	let dolniMez = 1;
	let horniMez = 100;
	let pocitadloPokusu = 0;
	let aktualniTip;

	// nalezení významných elementů na stránce
	let elementPocetPokusuVyhraZformatovano = document.querySelector(".pocet-pokusu-vyhra-zformatovano");
	let elementPocetPokusu = document.querySelector(".pocet-pokusu");
	let elementAktualniTip = document.querySelector(".aktualni-tip");
	let tlacitkoPridej = document.querySelector(".tlacitko-pridej");
	let tlacitkoTrefa = document.querySelector(".tlacitko-trefa");
	let tlacitkoUber = document.querySelector(".tlacitko-uber");
	let tlacitkoStart = document.querySelector(".tlacitko-start");
	let tlacitkoHratZnovu = document.querySelector(".tlacitko-hrat-znovu");

	// Tipne příští číslo z aktuálního rozsahu a překreslí hrací pole.
	function tipniCisloAPrekresli() {
		// tipnutí příštího čísla a navýšení počtu pokusů
		aktualniTip = tipniCislo(dolniMez, horniMez);
		pocitadloPokusu = pocitadloPokusu + 1;

		// zobrazení tipu a počítadla pokusů uživateli
		elementPocetPokusu.innerHTML = pocitadloPokusu;
		elementAktualniTip.innerHTML = aktualniTip;
	}

	// přidání obsluhy kliknutí na tlačítko Start
	tlacitkoStart.addEventListener("click", function () {
		// nastavení stavu hry na „při hře“, aby se správně zobrazily a schovaly patřičné elementy (viz CSS)
		document.body.className = "pri-hre";
		// první hádání hráčova čísla
		tipniCisloAPrekresli();
	});

	// přidání obsluhy kliknutí na tlačítko Přidej
	tlacitkoPridej.addEventListener("click", function () {
		if (aktualniTip === horniMez) {
			alert("Podvádíš!");
		} else {
			// zvýšení spodní meze
			dolniMez = aktualniTip + 1;
			console.log(`Nyní budu tipovat číslo z rozsahu ${dolniMez}, ${horniMez}.`);
			// další hádání hráčova čísla
			tipniCisloAPrekresli();
		}
	});

	// přidání obsluhy kliknutí na tlačítko Uber
	tlacitkoUber.addEventListener("click", function () {
		if (aktualniTip === dolniMez) {
			alert("Podvádíš!");
		} else {
			// snížení horní meze
			horniMez = aktualniTip - 1;
			console.log(`Nyní budu tipovat číslo z rozsahu ${dolniMez}, ${horniMez}.`);
			// další hádání hráčova čísla
			tipniCisloAPrekresli();
		}
	});

	// přidání obsluhy kliknutí na tlačítko Trefa!
	tlacitkoTrefa.addEventListener("click", function () {
		// nastavení stavu hry na „po hře“, aby se správně zobrazily a schovaly patřičné elementy (viz CSS)
		document.body.className = "po-hre";
		// zobrazení výsledného potřebného počtu pokusů
		elementPocetPokusuVyhraZformatovano.innerHTML = zformatujPocetPokusu(pocitadloPokusu);
	});

	// přidání obsluhy kliknutí na tlačítko Hrát znovu
	tlacitkoHratZnovu.addEventListener("click", function () {
		window.location.reload();
	});
});
