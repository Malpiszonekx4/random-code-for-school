//@ts-check

import {createInterface} from 'node:readline/promises'
import { stdin, stdout } from 'node:process'

const rl = createInterface(stdin, stdout)

const kolko = " o "
const krzyzyk = " x "
const pusto = "   "

function resetGry(){
    plansza[0] = [pusto, pusto, pusto]
    plansza[1] = [pusto, pusto, pusto]
    plansza[2] = [pusto, pusto, pusto]

    graTeraz = losowyGracz()
}

const plansza = [
    [pusto, pusto, pusto],
    [pusto, pusto, pusto],
    [pusto, pusto, pusto]
]
/**
 * @type {(typeof kolko) | (typeof krzyzyk)}
 */
let graTeraz = losowyGracz()

do {
    await gra()
} while((await rl.question("Czy chcesz zagrać jeszcze raz? [t/n] ")) == "t")
process.exit()

function losowyGracz() {
    return Math.round(Math.random()) == 1 ? kolko : krzyzyk
}

async function gra(){
    while(true){
        narysujPlansze()
    
        const ruchStr = await rl.question(`Ruch ${graTeraz == kolko ? "kółka" : "krzyżyka"}: `)
        const ruchMatch = ruchStr.toUpperCase().match(/([ABC])([123])/)
        if(ruchMatch == null){
            console.log("Nieprawidłowy ruch")
            continue
        }
    
        const kolumna = ruchMatch[1] == "A" ? 0 : ruchMatch[1] == "B" ? 1 : 2
        const rzad = parseInt(ruchMatch[2])-1
    
        if(plansza[rzad][kolumna] != pusto){
            console.log("Nieprawidłowy ruch")
            continue
        }
    
        plansza[rzad][kolumna] = graTeraz

        if (checkWinInRow() || checkWinInColumn() || checkWinInDiagonal()) {
            narysujPlansze()
            console.log(`Wygrywa ${graTeraz == kolko ? "kółko" : "krzyżyk"}`)
            resetGry()
            break
        }

        if (!plansza.some(kol => kol.some(kom =>  kom == pusto))) {
            narysujPlansze()
            console.log(`Remis`)
            resetGry()
            break
        }
    
        nastepnyGracz()
    }
}

/**
 * @return {boolean}
 */
function checkWinInColumn() {
    const rzad1 = plansza[0]
    const rzad2 = plansza[1]
    const rzad3 = plansza[2]
    for (let kol = 0; kol < 3; kol++) {
        if (rzad1[kol] != pusto && rzad1[kol] == rzad2[kol] && rzad2[kol] == rzad3[kol]) {
            return true
        }
    }
    return false
}

/**
 * @return {boolean}
 */
function checkWinInRow() {
    for (const rzad of plansza) {
        if (rzad[0] != pusto && rzad[0] == rzad[1] && rzad[1] == rzad[2]) {
            return true
        }
    }
    return false
}

/**
 * @returns {boolean}
 */
function checkWinInDiagonal(){
    const rzad1 = plansza[0]
    const rzad2 = plansza[1]
    const rzad3 = plansza[2]

    if(rzad1[2] != pusto && rzad1[2] == rzad2[1] && rzad2[1] == rzad3[0])
        return true
    if(rzad1[0] != pusto && rzad1[0] == rzad2[1] && rzad2[1] == rzad3[2])
        return true
    
    return false;
}

function narysujPlansze() {
    console.log('  A   B   C')
    console.log('-------------')
    let r = 1
    for (const rzad of plansza) {
        console.log(`|${rzad[0]}|${rzad[1]}|${rzad[2]}| ${r}`)
        console.log('-------------')
        r++
    }
}

function nastepnyGracz(){
    if(graTeraz == kolko)
        graTeraz = krzyzyk
    else
        graTeraz = kolko
}
