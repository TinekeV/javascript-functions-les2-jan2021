/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23

function plusSum (sum1, sum2, sum3) {       // parameters gedeclareerd
    return sum1 + sum2 + sum3
}

console.log(plusSum(3, 4,5));
console.log(plusSum(11, 3, 9));

/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"

function magicString (string1, string2) {
    return string1 + string2;
}

console.log(magicString('abra', 'cadabra'))

/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"

function nameCharacters(word, character) {
    return character + word + character;
}

console.log(nameCharacters("bril", '*'))
console.log(nameCharacters('beep', '_'))
console.log(nameCharacters('kaas', 'Q'))

/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"

function magicArray(wordArray) {
    let fullString = '';

    for (let i = 0; i < wordArray.length; i++) {
        fullString = fullString + wordArray[i]
    }

    return fullString;
}

console.log(magicArray(['abra', 'cadabra']))
console.log(magicArray(['a', 'b', 'c']))

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

function greetAll(nameArray) {
    let greetAll = "Hoi ";

    for (let i = 0; i < nameArray.length; i++) {
        if (i === nameArray.length -1) {                                    // scenario 1 - conditional
            return greetAll = greetAll + " en " + nameArray[i] + "!";
        }
        if (nameArray.length === 2 || i === nameArray.length -2) {          // scenario 2 - conditional
            greetAll = greetAll + nameArray[i];
        }
        else {
            greetAll = greetAll + nameArray[i] + ", ";                      // scenario 3 - conditional
        }
    }

    return greetAll
}

console.log(greetAll(['Nick', 'Nova', 'Mitchel', 'Arjen']));
console.log(greetAll(['Piet', 'Henk']));
console.log(greetAll(['A', 'B', 'C', 'D', 'E', 'F']))

//!!! SCHRIJF ALTIJD HET VOLLEDIGE STAPPENPLAN UIT, EN KIJK OOK OF ER MEERDERE SCENARIO'S ZIJN