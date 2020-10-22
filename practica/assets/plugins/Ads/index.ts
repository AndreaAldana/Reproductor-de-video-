import MediaPlayer from '../../MediaPlayer'
import Ads, { Ad } from './Ads'

//todos los plugin tienen el metodo publico run así que lo llamamos e importamos
class AdsPlugin {
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;
    private adsContainer: HTMLElement;

    constructor() {
        this.ads = Ads.getInstance()
        this.adsContainer = document.createElement('div')
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    }
    run(player: MediaPlayer) {
        this.player = player;
        this.media = this.player.media;
        this.player.container.appendChild(this.adsContainer)
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
        if (this.currentAd) {
            return;
        }

        const ad = this.ads.getAd();
        this.currentAd = ad;
        this.adsContainer.innerHTML = `
          <div class="ads">
            <a class="ads__link" href="${this.currentAd.url}" target="_blank">
              <img class="ads__img" src="${this.currentAd.imageUrl}" />
              <div class="ads__info">
                <h5 class="ads__title">${this.currentAd.title}</h5>
                <p class="ads__body">${this.currentAd.body}</p>
              </div>
            </a>
          </div>
        `;

        setTimeout(() => {
            this.currentAd = null;
            this.adsContainer.innerHTML = '';
        }, 10000);
    }
}
export default AdsPlugin;