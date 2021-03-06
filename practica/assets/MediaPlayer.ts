
// Creamos una función llamada mediaPlayer que nos servirá como prototipo.

class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>
    container: HTMLElement;
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative'
        //Contenedor al lado de media
        this.media.parentNode.insertBefore(this.container, this.media)
        //Media adentro de contenedor, ya que se vuelve hijob
        this.container.appendChild(this.media)
    }

    //this indica llamar a mediaplayer
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    /*  A mediaPlayer le asignamos una función llamada play usando prototype.
     Esta función le dará inicio al video. */
    //Si está pausado, puede darse play, si está en play, puede pausarse con click.
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    unmuteMute() {
        if (this.media.muted == true) {
            this.unmute();
        } else {
            this.mute();
        }
    }
}








/*    Luego con el botón se acciona una función llamada player que es una instancia del prototipo mediaPlayer que creamos.
La instancia se crea usando la palabra new. */

export default MediaPlayer;

//Se debe exportar para poder usarse