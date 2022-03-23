// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10

let a = -1;

while (a < 10) {
    a = a + 1;
    console.log(a);
}

// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu
console.log('druhý příklad jaký je rozdíl mezi <= a <');

while (a <= 10) {
    a = a + 1;
    console.log(a);
}


// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

let b = 11;
while (b > 0) {
    b = b - 1
    console.log(b);
}