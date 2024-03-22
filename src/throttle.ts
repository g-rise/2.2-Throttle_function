

// PRIMERA VERSIÖ DE LA FUNCIÓ THROTTLE
/*
export function throttle(func: Function, delay: number = 1000): Function {
    let lastTime: number = 0

    let id: number = 0   // S'estableix un comptador per veure l' avançament del throttle
    console.log('Throttle en el primer instant')

    return (...args: any[]) => {
        const now: number = new Date().getTime()
        id++

        if (now - lastTime < delay) return
        lastTime = now
        console.log(`\nEsdeveniment repetit per ${id} vegades\n`)  // Nombre de vegades que throttle ha evitat es cridès a la funció
        func(...args)
    }

}
*/

//Mateixa versió peró amb el tipat crec que millorat

export function throttle<T extends any[]>(func: (...args: T) => void, delay: number = 1000): (...args: T) => void {
    let lastTime: number = 0
    let id: number = 0
    console.log(`Primera vegada throttle`)

    return (...args: T) => {
        const now: number = new Date().getTime()
        id++

        if (now - lastTime < delay) return
        lastTime = now
        console.log(`\nEsdeveniment repetit per ${id} vegades\n`)
        func(...args)
    }
}