import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

//Aquí, se debe importar el archivo media player para que funcione
const video = document.querySelector("video");
const button: HTMLElement = document.querySelector("button");
const unmuteMute: HTMLElement = document.querySelector('#unmuteMute')

const player = new MediaPlayer({
  el: video, plugins: [
    new AutoPlay(), new AutoPause()]
});

button.onclick = () => player.togglePlay();
unmuteMute.onclick = () => player.unmuteMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message)
  })
}