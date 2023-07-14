// 1. Írj egy Person class-t, melynek a konstruktora fogadjon egy nevet és egy születési dátumot.
// Írj egy statikus metódust, ami visszaadja azon személyek számát, akik elmúltak 20 évesek.
// Protip: amikor létrehozzuk az adott személyt, akkor növelj egy változót

// 2. Adott egy 4 elemű weights tömb ['light', 'normal', 'heavy', 'extra heavy']
// Készíts egy `move` függvényt, ami visszaad egy promise-t.
// Véletlenszerűen válassz ki a weights elemei közül egyet.
// Ha a 'light' volt az, akkor 3 mp múlva a promise resolve-oljon a 'light' értékkel.
// Ha 'normal' volt, akkor 4 mp múlva a promise resolve-oljon 'normal' értékkel.
// Ha 'heavy' volt, akkor 5 mp múlva a promise resolve-oljon 'heavy' értékkel.
// Ha 'extra heavy', akkor 6mp múlva a Promise !! reject !! -elődjön egy error-ral,
// aminek az üzenete legyen a "Too Heavy"
// protip: használj setTimeout-ot 

const levels = ['light', 'normal', 'heavy', 'extra heavy'];

function getRandomLevel() {
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

function move() {
    const randomNum = getRandomLevel();
    return new Promise((resolve, reject) => {
        if (randomNum === 0) {
            resolve(setTimeout(() => {
                console.log(levels[randomNum])
            }, 3000));
        } else if (randomNum === 1) {
            resolve(setTimeout(() => {
                console.log(levels[randomNum])
            }, 4000));
        } else if (randomNum === 2) {
            resolve(setTimeout(() => {
                console.log(levels[randomNum])
            }, 5000));
        } else {
            reject(setTimeout(() => {
                console.log('Too heavy')
            }, 5000));
        }
    })

}

move();


// 3. Készíts egy  getRandomPromise függvényt, ami visszaad egy Promise-t,
// ami 2 mp múlva randomra resolve-olódik, vagy reject-elődik
// Készíts egy html fájlt, amiben van egy 60x60px div, kezdetben szürke színnel.
// Ha rákattintasz a div-re, akkor a színe legyen fekete, illetve hívd meg a getRandomPromise-t és ha
// resolve-olódik, akkor a div színe váltson zöldre,
// reject esetén pedig pirosra.
// Ha ismét rákattintasz, akkor ismét fusson le ez a mechanizmus.

const box = document.querySelector('#firstBox');

function getRandomPromise() {
    const random = Math.random();
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            if (random < 0.5) {
                resolve(box.style.backgroundColor = 'green');
            } else {
                reject(box.style.backgroundColor = 'red');
            }
        })
    }, 2000)

}

function mouseClick() {
    box.style.backgroundColor = 'black';
    getRandomPromise()
}

box.addEventListener('click', mouseClick);

// 4. Készíts egy html-t, melyben van egy <textarea> és egy gomb,
// továbbá hivatkozzuk be a notifications.js fájlt.
// Ha a gombot lenyomjuk, akkor próbáljuk meg a textarea-ban lévő szöveget JSON-ként értelmezni,
// és hívjuk meg rajta a JSON.parse metódust.
// 1. Abban az esetben, ha nem sikerül, úgy a notifications.js-ben lévő showNotification-t hívjuk meg:
//     "Hibás JSON: " + a parse által adott hiba szövege - error típusú legyen - és maradjon default idő
// 2. Abban az esetben, ha sikerül úgy a notifications.js-ben lévő showNotification-t hívjuk meg
//     "Helyes JSON" - ne legyen error típusú - és maradjon default idő
// protip: nézz bele a call-notifications-example.js-be hogyan lehet használni

// 5. Készíts egy html fájlt, amibe van egy label, egy input és egy gomb.
// Ha a gombot lenyomjuk, és az input-ban lévő szöveg hossza kevesebb mint 3 karakter,
// akkor dobj egy hibát ezzel a szöveggel: "Too short text"

const submit = document.querySelector('#submit');

function message() {
    debugger;
    const text = document.querySelector('#text').value;
    console.log(text.length);
    if (text.length < 3) {
        throw new Error('Too short text')
    }
}

submit.addEventListener('click', message);

// 6. Írj egy sleep függvényt, amely paraméterül kap egy 'milliseconds' számot, és visszaad egy promise-t,
// ami a paraméterül kapott 'milliseconds'-nyi ezredmásodperc után resolve-olódik.

function sleep(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log(milliseconds + ' ezred másodperc után resolve-olódtam.'))
        }, milliseconds)
    })
}

// 7. Készíts egy html-t, melybe az elején írd bele, hogy "loading". Majd futtasd le az előzőleg megírt
// sleep függvényt 5000-es értékkel, és miután resolve-olódott, írd felül a szöveget "ready"-re.

function sleep2() {
    const p = document.querySelector('p');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(p.innerText = 'ready')
        }, 5000)
    })
}