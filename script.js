/**
 * EXO 3
	
    FAITES UNE FONCTION FLECHEES QUI DIT BONJOUR TOUT LE MONDE 
	
    UNE DEUXIEME FONCTION FLECHEES QUI FAIT LA SOMME DE DEUX NOMBRE a et b QUI SONT DES PARAMETRES
	
    PAREIL POUR LA SOUSTRATION ET L'ADDITION


const greeting = () => { return 'Bonjour tout le monde'}

const somme = (a, b) => {
    return a + b
}
const soustraction = (a, b) => {
    return (a - b > 0) ? 'positif' : 'negatif'
}

const multi = (a, b) => {
    return a * b
}
console.log(soustraction(10, 5))
*/

/**
 * EXO 3
	
    UNE FONCTION QUI MULTIPLIE CHAQUE ELEMENT DU TABLEAU PAR 4
	
    UTILISER LA FONCTION MAP DE ES6
	
    let array = [15, 24, 15, 26, 1, 8, 45];
Chat



const multi = () => {
    //other_array = arrays.map((item) => item * 4)
    let arrays = [15, 24, 15, 26, 1, 8, 45];
    return arrays.map((element) => element * 4);
}

console.log(multi())*/


/**
 * TASK 2
 * Un loueur de voiture propose deux formules de location : 1. Location au kilomètre : a. pour les 100 premiers kilomètres : tarif r1 par km, b. pour les kilomètres de 101 à 1000 : tarif r2 par km, c. au-delà de 1000 kilomètres : tarif r3 par km. 2. Tarif journalier : Kilométrage illimité au prix par jour p_d. Dans les deux cas, il faut ajouter une assurance (dont le coût par jour est ins) et la taxe sur la valeur ajoutée (TVA). Les quantités r1, r2, r3, p_d, ins ainsi que le taux de TVA sont considérés comme des constantes. Prenons, par exemple : r1 = 0,7 r2 = 0,4 r3 = 0,2 p_d = 100 pouces = 0,3 (exprimé en dinars) et taux de TVA = 0,18. Écrire un algorithme qui, compte tenu du nombre total de kilomètres et du nombre de jours de localisation, calcule les coûts totaux des deux tarifs et indique par une étiquette la solution la plus adaptée et avantageuse pour le client.
 * 
 * TASK 2
 * 
 * Une date est donnée sous la forme d’un entier de 6 chiffres. Par exemple, le nombre 181019 représente le 18 octobre 2019. Développer un algorithme qui a un tel nombre en entrée, vérifie que ce numéro correspond à une date valide et affiche le résultat suivant : Jour : 18 Mois : Octobre Année : 2019
 */


/*
const r1= 0.7
const r2 = 0.4
const r3 = 0.2
const p_d = 100
const ins = 0.3
const vat = 0.18


// cost for Rental by km 
// calculat cost by km
let cost_by_km
var nb_km = prompt('give the number of kilometers:')
var nb_day = prompt('give the nuber of day of location: ')

if(nb_km <= 100){
  cost_by_km = nb_km * r1
} else if (nb_km <= 1000) {
  cost_by_km = (nb_km - 100) * r2 + 100 * r1
} else {
  cost_by_km =(nb_km-1000) * r3 + 900 *r2 + 100*r1
}
console.log(cost_by_km)

// adding insurance

cost_by_km = cost_by_km + (nb_day + ins)
console.log(`after adding insurance to the cost by km, result is ${cost_by_km}`)

// adding vat

cost_by_km = cost_by_km + (cost_by_km * vat)
console.log(`after adding vat the cost by km is ${cost_by_km}`)

// cost for Daily rate 
//calculate the cost by day
let cost_by_day = nb_day * (p_d + ins)
console.log(`the result of cost by day is ${cost_by_day}`)

// add vat to the rate
cost_by_day = cost_by_day *(1 + vat)
console.log(`after adding vat to the rate the cost by day is ${cost_by_day}`)

// better choice
if(cost_by_km < cost_by_day){
    console.log('better choice is rental by km. And the cost is', cost_by_km)
}else{
    console.log('better choice is rental by day. And the cost is', cost_by_day)
}


/**
 * Une date est donnée sous la forme d'un nombre entier 
de 6 chiffres. Par exemple, le nombre 181019 représente le 18 octobre 2019.
Développer un algorithme qui a un tel numéro en entrée, vérifie que 
ce numéro correspond à une date valide
et affiche le résultat suivant :

Jour : 18
Mois : octobre
Année : 2019
 */

/*
function date_verification(){
    const date_today = 181019
    let date
    const day = (prompt('give me the day today: '))
    console.log(day)
    const month = (prompt('give me the month today: '))
    console.log(month)
    const year = (prompt('give me the year today: '))
    console.log(year)
    date = day + month + year
    console.log(date)

    if(date == date_today){
        console.log(`Jour : ${day}`)
        console.log(`mois : ${month}`)
                console.log(`year : ${year}`)
    }else{
        console.log('date is not valid')
    }
}
date_verification()
*/

let table = [5, 15, 30, 45, 1]

/*function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
            let key = array[i];
            console.log(key)
            let j = i - 1;
            console.log(j)
            while (j >= 0 && array[j] > key) {
                    array[j + 1] = array[j];
                    console.log(array[j + 1])
                    j = j - 1;
                    console.log(j)
            }
            array[j + 1] = key;
            console.log(array[j + 1])
    }
    return array;
}
console.log(insertionSort(table))*/

for(let i = 1; i < table.length; i++) {
    let key = table[i];
    console.log(key)
    let j = i - 1;
    console.log(j)
    while (j >= 0 && table[j] > key) {
            table[j + 1] = table[j];
            console.log(table[j + 1])
            j = j - 1;
            console.log(j)
    }
    table[j + 1] = key;
    console.log(table[j + 1])
}
console.log(table);