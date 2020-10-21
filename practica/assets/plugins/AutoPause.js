class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }
    run(player) {
        //Llamamos a la instancia de la clase
        this.player = player;
        //Creamos el intersection observer
        //Primero recibe un handler y el segundo es ub objeto de configuración
        const observer = new IntersectionObserver(this.handleIntersection, {
            //Esto define qué percibirá del elemento, en este caso, 25% de elemento que sobre
            threshold: this.threshold
        });
        //Lo que va a observar, que en este caso es el video
        observer.observe(this.player.media)

        //Este evento detiene algo si no está siendo visto, en este caso
        //si sales de la pestaña del video, el se detendrá
        //Esto es muy util para también detener info o carruseles que el usuario no esté viendo
        //o incluso desactivar sonidos si se apaga la pantalla en descanso
        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    //Aquí hay que pasar una lista de entries, son todos los objetos que se están observando
    handleIntersection(entries) {
        //Le indicamos que es un solo elemento de la lista
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }


    }

    //Aquí la función que recibe, el cual es un boolean en el que si es true hace algo, y si es false,
    //la idea es detenerlo, visibility sabrá cuando detenerlo
    handleVisibilityChange() {
        const isVisible = document.visibilityState == "visible"
        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause()
        }

    }

}
export default AutoPause;