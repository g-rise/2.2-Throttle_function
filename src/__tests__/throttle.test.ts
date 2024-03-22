import { throttle } from "../throttle";
// import { expect, jest, test } from '@jest/globals';
//import { salutDebounce } from "../saludar";

describe('throttle', () => {
    beforeEach(() => {
        jest.useFakeTimers()

    })

    it('hauria de ser cridada només les vegades que s han establert com delay', () => {
        const func = jest.fn()
        const funcProva = throttle(func)


        setInterval(() => {
            funcProva()
        }, 50)

        jest.advanceTimersByTime(60);


        expect(func).toHaveBeenCalledTimes(1);

        // Avançament del temps més enllà del delay
        jest.advanceTimersByTime(1200);

        // Desprès de que el temps hagi passat la funció és cridada un'altra vegada
        expect(func).toHaveBeenCalledTimes(2);

        // Establim un temps inferior al delay, la funció no tornarà a ser cridada
        jest.advanceTimersByTime(200);
        expect(func).toHaveBeenCalledTimes(2);


    })

    it('hauria de ser cridada immediatament', () => {
        const func = jest.fn()
        const funcProva = throttle(func)

        funcProva()
        expect(func).toHaveBeenCalled

    })

    it('hauria de funcionar amb funcions que passen parametres tambè', () => {
        const func = jest.fn((x: string, y: number) => (x + y.toString()))
        const funcProva = throttle(func)


        setInterval(() => {
            funcProva("A", 7)
        }, 50)

        jest.advanceTimersByTime(60);


        expect(func).toHaveBeenCalledTimes(1);
        expect(func.mock.results[0].value).toBe("A7")
        /** Quan es crea una funcio de prova aquesta té la proprietat ".mock" amb la informació de seguiment
         * L'objecte .mock té la propietat .results --> conté els resultats de les diferents crides que s'han fet a la funció; cada resultat és un objecte
         * [0] ens dona accés al primer resultat
         * ".value" és una propietat dins de l'objecte de resultat que conté el valor retornat per la funció
         */

        // Avançament del temps més enllà del delay
        jest.advanceTimersByTime(1200);

        // Desprès de que el temps hagi passat la funció és cridada un'altra vegada
        expect(func).toHaveBeenCalledTimes(2);
    })


})