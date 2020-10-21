//Primero definimos unas interfaces

interface Observer {
    update: (data: any) => void
}

interface Subject {
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject {
    //Se define la lista
    observers: Observer[] = [];

    constructor() {
        const el: HTMLInputElement = document.querySelector("#value");
        el.addEventListener('input', () => {
            //El notificará cuando el valor cambie
            this.notify(el.value)
        })

    }


    //se añade a una lista de observadores
    subscribe(observer: Observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer: Observer) {
        //para sacarlo debemos saber en que indice se encuentra
        const index = this.observers.findIndex(obs => {
            return obs == observer;
        })
        //de ese indice solo queremos sacar 1 elemento
        this.observers.splice(index, 1)
    }

    //Esto notificará a los subscriptores
    notify(data: any) {
        this.observers.forEach(observer => observer.update(data))
    }
}

class PriceDisplay implements Observer {
    private el: HTMLElement;
    constructor() {
        this.el = document.querySelector("#price")
    }
    update(data: any) {
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice()
const display = new PriceDisplay();
value.subscribe(display);

setTimeout(
    () => value.unsubscribe(display),
    5000
)
