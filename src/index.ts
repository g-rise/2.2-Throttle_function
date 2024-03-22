
import { lecturaThrottle } from "./divina";


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
}, 7000)