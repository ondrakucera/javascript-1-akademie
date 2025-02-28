# Domácí úkoly z 1. lekce

## Hodnocení venkovní teploty

Vytvoř funkci `ohodnotTeplotu`, která bude mít jeden číselný parametr `teplota` a která na základě zadané teploty vrátí
řetězec `"mrzne"`, `"je zima"`, `"je chladno"`, `"je příjemně"`, `"je odporné vedro"`, případně jakýkoliv jiný, který si
vymyslíš.

## Otvírací doba

Vytvoř funkci `jeOtevrenoNeboZavreno`, která bude mít jeden číselný parametr `hodina` (který zjednodušeným způsobem
vyjadřuje, kolik je zrovna hodin: vyjadřuje hodinu v rámci dne, tedy od 0 do 23). Vymysli si otevírací dobu fiktivního
obchodu (ideálně i s dostatečně dlouhou polední přestávkou) a na základě ní funkci implementuj, aby vracela řetězec
`"je otevřeno"`, nebo `"je zavřeno"`.

## Obsahy, obvody, objemy a povrchy

Vytvoř dle vlastního výběru funkce pro výpočet obsahu, obvodu, objemu nebo povrchu běžných geometrických útvarů.
Například funkce pro výpočet obsahu čtverce bude mít pochopitelně jediný číselný parametr (délka hrany), zatímco funkce
pro výpočet objemu kužele bude mít parametry dva (poloměr podstavy a výšku).

## Počet sekund

Vytvoř funkci `pocetSekund` se čtyřmi parametry: `dny`, `hodiny`, `minuty`, `sekundy`. Výsledkem funkce bude celkový
počet sekund v zadaném časovém období.

## Index tělesné hmotnosti

Vytvoř funkci `bmi`, která na základě hmotnosti a výšky spočte index tělesné hmotnosti (BMI).

## Převody jednotek

- Vytvoř funkci `fahrenheitNaCelsius`, která jako parametr dostane teplotu ve stupních Fahrenheita a jako výsledek vrátí
  teplotu ve stupních Celsia.
- Vytvoř funkci `stopyAPalceNaCentimetry`, která jako parametry dostane počet stop a počet palců a jako výsledek vrátí
  odpovídající délku v centimetrech.

## * Prvočísla

Vytvoř funkci `jePrvocislo`, která o své číselném parametru rozhodne, zda je, či není prvočíslem, a podle toho vrátí buď
hodnotu `true`, nebo hodnotu `false`.
