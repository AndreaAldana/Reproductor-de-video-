import MediaPlayer from '../../MediaPlayer'
import Ads, { Ad } from './Ads'

//todos los plugin tienen el metodo publico run así que lo llamamos e importamos
class AdsPlugin {
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;

    constructor() {
        this.ads = Ads.getInstance()
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    }
    run(player: MediaPlayer) {
        this.player = player;
        this.media = this.player.media;
        //timeupdate anuncia el cambio del tiempo y permite realizar acciones en dicho tiempo determinado
        this.media.addEventListener('timeupdate', this.handleTimeUpdate)
    }

    private handleTimeUpdate() {
        //math.floor regresa un valor entero
        const currentTime = Math.floor(this.media.currentTime)
        // Cada 30 seg desplega un ad
        if (currentTime % 30 == 0) {
            this.renderAd()
        }
    }

    //Esta función llama al get
    private renderAd() {
        //Si ya tenemos un current ad. no mostrar otro
        if (this.currentAd) {
            return;
        }
        const ad = this.ads.getAd()
        this.currentAd = ad;
        console.log(this.currentAd)
    }
}

export default AdsPlugin;