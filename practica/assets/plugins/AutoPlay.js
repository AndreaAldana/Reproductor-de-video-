function AutoPlay() { }


//aquí se llama una instancia de mediaplayer
AutoPlay.prototype.run = function (player) {
    if (!player.muted) {
        player.muted = true;
    }

    player.play();
}
export default AutoPlay;