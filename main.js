// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10

for (let i = 0; i < 11; i = i + 1) {
    console.log(i);
}


// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu
console.log('druhý příklad jaký je rozdíl mezi <= a <');

for (let i = 0; i <= 11; i = i + 1) {
    console.log(i);
}

for (let i = 0; i < 11; i = i + 1) {
    console.log(i);
}


// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

for (let i = 10; i >= 0; i = i - 1) {
    console.log(i);
}