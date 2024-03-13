// Funkce pro změnu obsahu nadpisu první úrovně.
function zmenTextNadpisuH1() {
	let nadpisH1 = document.querySelector("h1");
	nadpisH1.innerHTML = "Nadpis změněný z JavaScriptu!";
}

// --------------------------------------------------

// Funkce pro změnu obsahu odstavce s identifikátorem "uvod".
function zmenTextUvodu() {
	let uvod = document.querySelector("#uvod");
	uvod.innerHTML = "Text odstavce změněný z JavaScriptu. Část textu je dokonce <em>důležitá</em>.";
}

// Navěšení funkce měnící text úvodu na kliknutí na tlačítko
let tlacitkoKUvodu = document.querySelector("#tlacitkoKUvodu");
tlacitkoKUvodu.addEventListener("click", zmenTextUvodu);

// --------------------------------------------------

// Navěšení funkce pro přepínání třídy "aktivni" na kliknutí na první čtvereček
let prvniCtverecek = document.querySelector("#prvni-ctverecek");
prvniCtverecek.addEventListener("click", function () {
	prvniCtverecek.classList.toggle("aktivni");
});

// --------------------------------------------------

// Funkce pro přepínání třídy "aktivni" na elementu, který byl cílem události.
function zmenAktivnost(event) {
	let elementUdalosti = event.target;
	elementUdalosti.classList.toggle("aktivni");
}

// Navěšení funkce pro přepínání třídy "aktivni" na kliknutí na druhý, třetí a čtvrtý čtvereček
let druhyCtverecek = document.querySelector("#druhy-ctverecek");
let tretiCtverecek = document.querySelector("#treti-ctverecek");
let ctvrtyCtverecek = document.querySelector("#ctvrty-ctverecek");
druhyCtverecek.addEventListener("click", zmenAktivnost);
tretiCtverecek.addEventListener("click", zmenAktivnost);
ctvrtyCtverecek.addEventListener("click", zmenAktivnost);

// --------------------------------------------------

// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
	let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return vysledek;
}

// Funkce pro hod hrací kostkou o libovolném počtu stěn. Pro obvyklou kostku by se použilo volání hodKostkou(6).
function hodKostkou(pocetSten) {
	let vysledek = nahodneCislo(1, pocetSten);
	return vysledek;
}

// --------------------------------------------------

// Obsluha kliknutí na tlačítko "hoď kostkou": po jeho stisknutí se provede hod šestistěnnou kostkou a výsledek se
// zobrazí v podobě obrázku kostky jako obsah v HTML připraveného odstavce
let tlacitkoHodKostkou = document.querySelector("#hodKostkou");
tlacitkoHodKostkou.addEventListener("click", function () {
	// hození kostkou
	let cisloNaKostce = hodKostkou(6);
	// nalezení odstavce připraveného pro zapsání výsledku a změna jeho obsahu
	let odstavecVysledek = document.querySelector("#hodKostkouVysledek");
	odstavecVysledek.innerHTML = `<img src="dice-${cisloNaKostce}.svg">`;
});
