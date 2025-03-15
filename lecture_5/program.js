// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
	let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return vysledek;
}

// Tipuje číslo od minimum (včetně) do maximum (včetně).
function tipniCislo(minimum, maximum) {
	// return minimum;
	// return maximum;
	// return nahodneCislo(minimum, maximum);
	return Math.floor((minimum + maximum) / 2);
}

// nastavení hodnot proměnných vyjadřujících stav hry
let dolniMez;
let horniMez;
let aktualniTip;
let pocetPokusu = 0;

// nalezení významných elementů na stránce
let sekcePokyny = document.querySelector(".pokyny");
let sekceHraciPole = document.querySelector(".hraci-pole");
let trefilJsemSeNadpis = document.querySelector(".hraci-pole h3");
let cisloTipuElement = document.querySelector(".cislo-tipu");
let aktualniTipElement = document.querySelector(".aktualni-tip");
let sekceZahajeniHry = document.querySelector(".zahajeni-hry");
let sekceOvladaniHry = document.querySelector(".ovladani-hry");
let sekceRestartHry = document.querySelector(".restart-hry");
let dolniMezPolicko = document.querySelector(".dolni-mez-vstup");
let horniMezPolicko = document.querySelector(".horni-mez-vstup");
let tlacitkoStart = document.querySelector(".tlacitko-start");
let tlacitkoPridej = document.querySelector(".tlacitko-pridej");
let tlacitkoTrefa = document.querySelector(".tlacitko-trefa");
let tlacitkoUber = document.querySelector(".tlacitko-uber");
let tlacitkoNovaHra = document.querySelector(".tlacitko-nova-hra");

// Tipne příští číslo z aktuálního rozsahu a překreslí hrací pole.
function tipniCisloAPrekresli() {
	// tipnutí příštího čísla a navýšení počtu pokusů
	aktualniTip = tipniCislo(dolniMez, horniMez);
	pocetPokusu = pocetPokusu + 1;

	// zobrazení tipu a počítadla pokusů uživateli
	aktualniTipElement.innerHTML = aktualniTip;
	cisloTipuElement.innerHTML = pocetPokusu;
}

// přidání obsluhy kliknutí na tlačítko Start
tlacitkoStart.addEventListener("click", function () {
	// nastavení stavu hry na „při hře“, aby se správně zobrazily a schovaly patřičné elementy (viz CSS)
	document.body.className = "pri-hre";

	// načtení mezí
	dolniMez = Number(dolniMezPolicko.value);
	horniMez = Number(horniMezPolicko.value);

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
		console.log(`Nyní budu tipovat číslo z rozsahu ${dolniMez} až ${horniMez}.`);
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
		console.log(`Nyní budu tipovat číslo z rozsahu ${dolniMez} až ${horniMez}.`);
		// další hádání hráčova čísla
		tipniCisloAPrekresli();
	}
});

// přidání obsluhy kliknutí na tlačítko Trefa!
tlacitkoTrefa.addEventListener("click", function () {
	// nastavení stavu hry na „po hře“, aby se správně zobrazily a schovaly patřičné elementy (viz CSS)
	document.body.className = "po-hre";
	// změna textu podnadpisu
	trefilJsemSeNadpis.innerHTML = "Trefil jsem se!";
});

// přidání obsluhy kliknutí na tlačítko Hrát znovu
tlacitkoNovaHra.addEventListener("click", function () {
	window.location.reload();
});
