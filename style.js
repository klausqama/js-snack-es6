//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const bici = [
    {
        nome : 'bici azzura', 
        peso: 1.5
    },
    {
        nome : 'bici gialla',
        peso: 1.3
    },
    {
        nome : 'bici verde', 
        peso: 1.1
    },
    {
        nome : 'bici grigia', 
        peso: 1.8
    },
    {
        nome : 'bici brutta', 
        peso: 0.9,
    },
]
let biciDiRiferimento = bici[0]


for(let i = 0; i < bici.length; i++){
    const biciCorrente = bici[i]
    console.log(biciCorrente)

    if(biciCorrente.peso < biciDiRiferimento.peso)
    console.log(`La ${biciCorrente.nome}, e piu leggera della ${biciDiRiferimento.nome} `),
    biciDiRiferimento = biciCorrente

};

//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const footballTeam = [
    {
        nome : 'juve', 
        punti: 0,
        falli: 0,
    },
    {
        nome : 'milan',
        punti: 0,
        falli: 0,
    },
    {
        nome : 'inter', 
        punti: 0,
        falli: 0,
    },
    {
        nome : 'roma', 
        punti: 0,
        falli: 0,
    },
    {
        nome : 'napoli', 
        punti: 0,
        falli: 0,
    },
]

//Snack 3 (Bonus)
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.