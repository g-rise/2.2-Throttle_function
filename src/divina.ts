import { throttle } from "./throttle";

function divina() {
    console.log(`Nel mezzo del cammin di nostra vita
    mi ritrovai per una selva oscura
    ché la diritta via era smarrita.`)
}

export const lecturaThrottle = throttle(divina)

