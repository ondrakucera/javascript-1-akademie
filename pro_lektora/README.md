# Informace pro lektora akademie

Tento dokument popisuje obsah a zamýšlenou výuku akademie. Neobsahuje žádné vyloženě tajné informace, které by
účastníci kurzu nesměli vědět, ale pokud toto čteš právě jako účastník, je možné, že se zbytečně připravíš o řadu
doplňujících informací, které v rámci výuky právě lektor dodá. :-)

## Struktura akademie

Akademie se aktuálně skládá z pěti lekcí:

1. _Úvod do programování._ Úvodní představení JavaScriptu a konceptu programování jako takového.
1. _Document Object Model, události._ Představení DOMu a událostmi řízeného programování.
1. _Řetězce, pole, objekty, funkce._ Bližší pohled na nejdůležitější datové typy.
1. _Guess the number._ Implementace jednoduché hry.
1. _Guess the number reversed._ Implementace jednoduché hry.

## Použité ukázky a jejich předpokládané využití

Ukázky jednotlivých lekcí jsou rozděleny do samostatných adresářů, _lecture\_1_ až _lecture\_5_. U lekcí, kde se
probírá velké množství krátkých a vzájemně nesouvisejících ukázek, kdy každá typicky vypisuje nějaké informace do
konzole, jsou ukázky dodány zakomentované, protože kdyby se spustily všechny najednou, nedalo by se v jednotlivých
výpisech do konzole vyznat (a nelze vyloučit, že by se některé ukázky i vzájemně ovlivňovaly). Sekce odpovídající
jednotlivým ukázkám jsou ale jasně vyznačeny a platí, že vždy je možné odkomentovat celou jednu ukázku a ta bude
samostatně plně funkční.

Celková myšlenka je taková, že lektor na začátku každé lekce vytvoří v kořenovém adresáři repository (tj. adresáři o
jeden nadřazeném tomuto) adresář odpovídající dané lekci (tedy postupně _lecture\_1_ až _lecture\_5_), a v něm během
lekce buduje takový obsah, aby na konci lekce odpovídal odpovídajícímu obsahu v tomto adresáři. Ukázky pochopitelně
nemusejí být shodné doslova, ale svojí myšlenkou by se měly těm zde přítomným podobat.

Předpokládá se, že po skončení lekce vyučující vždy do své repository přidá aktuální obsah tvořeného adresáře
_lecture\_x_, ať už svůj vlastní, nebo klidně právě zkopírovaný ze souborů v tomto adresáři, a tento obsah následně
účastníkům zpřístupní. Jinými slovy po skončení všech lekcí by budované soubory měly mít obsah obdobný jako soubory v
tomto adresáři (případně zcela stejný).

## Popis lekcí

### Úvod do programování

Úplně první ukázky, které je potřeba během lekce předvést, se týkají toho, že je možné třeba sečíst dvě čísla nebo že
je možné hodnoty dávat do proměnných a s nimi dále pracovat. Jakkoliv na začátku hodiny jsou takovéto příklady pro
některé účastníky zcela nové, už na konci této hodiny pro ně budou natolik jasné, že nemá smysl takto primitivní ukázky
zařazovat do celkového závěru lekce. Proto zveřejněné ukázky pro tuto lekci začínají až těmi aspoň o trochu
pokročilejšími.

Podle toho, jak to na hodině vychází časově, je možné funkci pro generování náhodného celého čísla v rozsahu od
nějakého minima do nějakého maxima odvodit postupně krok za krokem na tabuli, nebo je možné ji pouze předložit bez
bližšího komentáře (s tím, že zájemcům je možné bližší detaily podat bokem – jednou jsme ji taky vysvětlovali následně
po lekci v hospodě).

### Document Object Model, události

Ukázky této lekce se od předchozí liší tím, že potřebné HTML (a CSS) je plně připravené. Před hodinou je tedy potřeba
vzít celý adresář _lecture\_2_, v něm z obou javascriptových souborů odstranit obsah (ale soubory ponechat) a následně
vše účastníkům poskytnout v zazipované podobě přes Google Drive (neočekáváme u nich větší znalost ani Gitu, ani
GitHubu).

Za povšimnutí stojí, že na této lekci vkládáme element `script` na poslední místo v těle dokumentu, abychom ze skriptu
mohli ihned přistupovat k DOMu (protože až ve druhé části hodiny vůbec představíme koncept události).

### Řetězce, pole, objekty, funkce

V této lekci už je poměrně hodně ukázek, které některým účastníkům (především těm s nějakými předchozími znalostmi nebo
zkušenostmi) mohou připadat ještě celkem jednoduché, zatímco pro jiné mohou být už značně komplikované. To má dopad i
na čas pro ně potřebný.

Původně tato lekce obsahovala ještě navazující povídání o funkcích, ale v roce 2024 jsme se tuto část rozhodli
přesunout do JavaScript 2 akademie. Do budoucna bychom měli zmínku o funkcích odstranit z názvu lekce.

### Guess the number

Obsah lekce spočívá pouze v procvičování. Cílem je vytvořit hru, kdy počítač vygeneruje tajné náhodné číslo a uživatel se
je snaží uhodnout. Před hodinou je potřeba vzít celý adresář _lecture\_4_, v něm z javascriptového souboru odstranit
obsah (ale soubor ponechat) a následně vše účastníkům poskytnout v zazipované podobě přes Google Drive.

Lekce by měla probíhat tak, že vše (nebo většinu věcí) sice programuje lektor společně s účastníky (kteří jej sledují a
programují si totéž u sebe), ovšem ideálně si lektor potřebný kód nechává účastníky diktovat (čili vlastně by měl
fungovat jako takový terminál, kterému účastníci předávají pokyny). Součástí tedy může být i napsání kódu, který někdo
navrhl, přestože lektor ví, že to nepovede k cíli.

Co všechno se do hry naimplementuje, se nechává do jisté míry na účastnících (a proto také platí, že výsledný kód bude
každý rok vypadat trochu jinak). Základem je pochopitelně vždy naimplementovat samotnou logiku hry, tedy že uživatel
zadává číslo, které si myslí, a počítač jej informuje buďto, že uhodl, nebo že jeho číslo je příliš nízké, nebo příliš
vysoké. Následujícím vhodným krokem je při neuhodnutí na obrazovce upravit rozmezí čísel, ve kterém se nyní hráč
pohybuje, aby si nemusel pamatovat svoje předchozí tipy.

Dále se obvykle přidává funkčnost počítání pokusů hráče. Je ale možné udržovat (a někam vypisovat) celou historii
hádaných čísel. Stejně tak je možné hráče v počtu pokusů vysloveně omezit a v případě jejich vyčerpání hru ukončit.
Nejlepší je ale skutečně v okamžiku, kdy je naprogramován základ hry jako takový nechat účastníky samotné navrhnout, co
by se do hry mohlo ještě přidat.

Součástí lekce je rovněž umístění elementu `script` do hlavičky dokumentu a obsluha události `load`.

### Guess the number reversed

Obsah této celodenní lekce opět spočívá pouze v procvičování, tentokrát s ještě o něco větším důrazem na samostatnou
práci. Základním cílem je naprogramovat hru obdobnou té z předchozí lekce, ovšem s vyměněnými rolemi: uživatel si myslí
tajné číslo a počítač se je snaží uhodnout.

Tentokrát je ovšem cílem i celou hru na základě pouze základního konceptu uvedeného v předchozím odstavci vymyslet. Vše
tedy začíná tím, že účastníci navrhují (a lektor to třeba kreslí na tabuli), jak by měla obrazovka hry vypadat,
respektive jak by měla vypadat v jaké situaci (typicky se dojde k tomu, že nějak vypadá před zahájením hry, nějak
vypadá během hry a nějak vypadá ve chvíli, kdy počítač uhodne uživatelovo číslo).

Poté opět nastává fáze, kdy lektor společně s účastníky dává dohromady samotnou funkčnost hry, tedy potřebné HTML a
JavaScript. Naopak je zde cíleně opomenuto CSS, aby účastníci viděli, že samotnou podstatu toho, co programujeme (v
tomto případě hry), je možné dělat nezávisle na výsledném vzhledu.

Účastníky navržené chování hry obvykle vede k tomu, že při mačkání různých tlačítek se objevují a schovávají různé
sekce dokumentu. To dává možnost diskuse o tom, že může být poměrně složité bezchybně při obsluze každého tlačítka
říct, co se zrovna kde má schovat, nebo naopak objevit. Nabídnutou alternativou může být to, že se určí několik stavů, ve
kterých hra může být (typicky stav před hrou, při hře a po hře), tento stav se udržuje jako třída elementu `body` a
zobrazování a schovávání jednotlivých částí dokumentu je určeno v CSS právě na základě toho, kterou třídu zrovna `body`
má.

Dalším zajímavým bodem do diskuse je samozřejmě algoritmus toho, jakým způsobem by měl počítač vybrat příští číslo,
které si tipne. Opět je nejlepší, když se svými návrhy přijdou účastníci sami a když lektor jednotlivé možnosti a
rozdíly mezi nimi následně okomentuje.

Obsluha některých tlačítek při přímočarém použití vede na opakující se kód, což dává příležitost ukázat refaktoring v
podobě zavedení funkce obsahující tento společný kód.

Zajímavým cvičením je rovněž rozmyšlení, jak detekovat, že se uživatel nesnaží podvádět, tedy že si nejprve nemyslel
nějaké číslo, a když zjistil, že se počítač příliš přiblížil, tak nezačal předstírat, že si myslí číslo úplně jiné (v
oblasti, kterou už počítač mezitím vyloučil).

Na výše popsanou společnou práci (kterou ale lze prokládat drobnými samostatnými úkoly) odpoledne navazuje už zcela
samostatná práce účastníků, jejímž cílem je funkční, ale nevzhledné hře, dodat jakékoliv styly, které ji učiní vizuálně
atraktivní. Pro tuto část už neexistuje žádné zadání ani žádný cílový vzhled: je opravdu na každém účastníku, jak to
uchopí.

## Poznámky

- Jakkoliv účastnicím v rámci této akademie Prettier neukazujeme, veškeré ukázkové HTML a CSS soubory jsou jím
  formátovány. To v řadě míst vede k poněkud jinému formátování, než bych si třeba sám představoval, ale na druhou
  stranu je to jediný rozumný způsob, jak zajistit nějakou celkovou konzistenci.
- V javascriptových souborech se názvy všech proměnných a funkcí používají v češtině (respektive cestine). Může to
  působit zvláštně, ale je to zcela vědomé a léty prověřené rozhodnutí. Díky tomu je v jakémkoliv kusu kódu, kterému
  třeba účastník plně nerozumí, hned na první pohled zřejmé, kdy používáme něco, co je zabudováno v JavaScriptu
  samotném (protože je to anglicky), a kdy používáme něco, co jsme si sami naprogramovali. Druhým pozitivním efektem je
  to, že účastníci nemusejí tolik času trávit přemýšlením tím, jak něco vhodně anglicky pojmenovat (pro řadu z nich to
  nemusí být jednoduché).
