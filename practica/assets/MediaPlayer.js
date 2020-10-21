
// Creamos una función llamada mediaPlayer que nos servirá como prototipo.

function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

//this indica llamar a mediaplayer
MediaPlayer.prototype._initPlugins = function () {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.video,
        get muted() {
            return this.media.muted;
        },
        set muted(value) {
            if (value == true) {
                this.media.muted = value
            }
        }
    }
    this.plugins.forEach(plugin => {
        plugin.run(this);
    })
}

/*  A mediaPlayer le asignamos una función llamada play usando prototype.
 Esta función le dará inicio al video. */
//Si está pausado, puede darse play, si está en play, puede pausarse con click.

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
}

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
}

MediaPlayer.prototype.unmuteMute = function () {
    if (this.media.muted == true) {
        this.unmute();
    } else {
        this.mute();
    }
}

/*    Luego con el botón se acciona una función llamada player que es una instancia del prototipo mediaPlayer que creamos.
La instancia se crea usando la palabra new. */

export default MediaPlayer;

//Se debe exportar para poder usarse