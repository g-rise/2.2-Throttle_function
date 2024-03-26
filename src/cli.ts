import { lecturaThrottle } from "./divina";
import { throttle } from "./throttle";

import * as readline from "readline";
import colors from "colors";

import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

//prova

// const divina = `Nel mezzo del cammin di nostra vita
// mi ritrovai per una selva oscura
// ché la diritta via era smarrita.`.split("")
// console.log(divina)
// lecturaThrottle()

function mostrarOpcions(input: string) {
    switch (input) {
        case "1":
            let idInterval: ReturnType<typeof setInterval>

            // Creo un setInterval perquè la funció es repeteixi en continuació cada 40 millisegons
            idInterval = setInterval(() => {
                lecturaThrottle()
            }, 40)

            // Creo una funció per frenar l'execució del setInterval
            const frenaExecucio = () => {
                clearInterval(idInterval)
            }

            // Crido a la funcio per frenar l'execució després de 7 segons
            setTimeout(() => {
                frenaExecucio()
            }, 3000)

            setTimeout(() => {

                console.log(colors.cyan("\nL'impressió per consola del primer vers de la \"Divina Commedia\" de Dante\ns'hauria hagut de repetir per més de 50 vegades però només ha passat 3 vegades"))
                rl.close()

            }, 4000);

            break;

        case "2":
            rl.close()
            break;

        default:
            console.error(('Aquest opció no és correcta, torna a introduir una opció vàlida'))
            rl.question('-->', (opcio) => {
                mostrarOpcions(opcio)
            })


    }





}

function iniciarCli() {
    console.log(colors.blue.bgWhite(' ========================== '))
    console.log(colors.blue.bgWhite(' Exemple de funció throttle '))
    console.log(colors.blue.bgWhite(' ========================== \n'))
    // for (const iterator of array) {
    //     console.info(iterator)

    // }
    console.log('Pressiona ' + colors.red.bold(' 1 + ENTER ') + ' per veure el funcionament de la funció Throttle')
    console.log('Pressiona ' + colors.red.bold(' 2 + ENTER ') + ' per sortir de l\'aplicació')
    rl.question('-->', (opcio) => {
        mostrarOpcions(opcio)
    })


}
iniciarCli()
