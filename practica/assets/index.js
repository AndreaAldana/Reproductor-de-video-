import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

//Aquí, se debe importar el archivo media player para que funcione
const video = document.querySelector("video");
const button = document.querySelector("button");
const unmuteMute = document.querySelector('#unmuteMute')

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