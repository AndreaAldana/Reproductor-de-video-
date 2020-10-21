class Singleton {
    private static instance: Singleton;

    private constructor() {

    }

    static getInstance() {
        //Si no existe, se crea y se regresa
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

export default Singleton