# Domácí úkol ze 2. lekce

Doplň funkčnost připravené jednoduché webové stránce (_index.html_). Stránka je rozdělena na dvě sekce. V levé sekci
uživatel stránky vyplní, jak si přeje, aby pravá sekce vypadala, a v pravé sekci se pak tedy jeho přání zobrazí.
Konkrétně:

- Uživatel může zvolit jedno ze čtyř barevných témat, které bude na pravou sekci aplikováno.
- Uživatel může vyplnit text nadpisu, který bude v pravé sekci zobrazen.
- Uživatel si může vybrat jeden ze čtyř obrázků, který bude v pravé sekci zobrazen.
- Uživatel může vyplnit text odstavce, kterým vybraný obrázek popíše.

Cílem je tedy vytvořit obsluhu události kliknutí pro jednotlivá tlačítka na stránce a navíc i pro čtyři boxíky (`div`) s
náhledy barevných témat s následujícím chováním:

- Při kliknutí na konkrétní boxík barevného tématu se dané téma aplikuje na celou pravou sekci.
- Při kliknutí na tlačítko potvrzující text nadpisu se pro nadpis pravé sekce použije text zadaný uživatelem do
  vstupního políčka.
- Při kliknutí na tlačítko jednoho ze zvířat se v pravé sekci vymění stávající obrázek za obrázek toho zvířete, jež bylo
  uživatelem zvoleno.
- Při kliknutí na tlačítko potvrzující text odstavce se pro odstavec pravé sekce použije text zadaný uživatelem do
  vstupního políčka.

Hlavním obsahem úkolu je tedy pochopitelně vytvoření javascriptového souboru (který nezapomeň k HTML souboru připojit) s
kódem obsluhujícím jednotlivé výše popsané události. Je ovšem pravděpodobné, že při řešení budeš muset drobně zasahovat
i do HTML kódu, protože nejspíš budeš potřebovat některým elementům přiřadit vhodné identifikátory (atribut `id`), aby
se ti s nimi z JavaScriptu lépe pracovalo.

Ještě je potřeba upřesnit si, jak ze vstupního formulářového pole získáme text vyplněný uživatelem. Naštěstí to není
nijak komplikované: hodnotu nalezneme ve vlastnosti `value` daného elementu, tedy následujícím způsobem:

```javascript
let vstupniPole = document.querySelector("#nejake-vstupni-pole");
let hodnotaVyplnenaUzivatelem = vstupniPole.value;
```

Jako bonus můžeš stránce libovolným způsobem vylepšit styly v CSS, které jsou v rámci zadání záměrně opět velmi
spartánské.
