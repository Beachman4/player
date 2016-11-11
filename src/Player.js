class Player
{
    constructor()
    {
        this.player = null;
        this.src = null;
        this.type = 1;
    }

    init(element)
    {
        this.player = element;
        this.player.controls = true;
        this.play();
    }

    mediaType()
    {
        if (this.player.tagName == "AUDIO") {
            this.type = 1;
        } else {
            this.type = 2;
        }
    }



    play()
    {
        this.player.play();
    }
    stop()
    {
        this.player.pause();
    }
    fastforward()
    {

    }

    volumeUp()
    {

    }

    initHandlers()
    {

    }

}