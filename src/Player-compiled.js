'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player() {
        _classCallCheck(this, Player);

        this.player = null;
        this.src = null;
        this.type = 1;
        this.currentSong = null;
        this.previousSong = null;
        this.currentVideo = null;
        this.playing = false;
        this.progress = document.getElementById('player-progress-bar');
        //won't use this, just while I'm doing this shit
        this.playlist = ['playlist/death.mp3', 'playlist/get.mp3', 'playlist/into.mp3', 'playlist/love.mp3', 'playlist/misery.mp3', 'playlist/silence.mp3'];
    }

    _createClass(Player, [{
        key: 'init',
        value: function init(element) {
            this.player = element;
            this.player.controls = true;
            this.initHandlers();
            this.loadPlayist();
        }
    }, {
        key: 'mediaType',
        value: function mediaType() {
            if (this.player.tagName == "AUDIO") {
                this.type = 1;
            } else {
                this.type = 2;
            }
        }
    }, {
        key: 'play',
        value: function play() {
            this.player.play();
            this.playing = true;
            document.getElementById('player-pause').style.display = 'block';
            document.getElementById('player-play').style.display = 'none';
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.player.pause();
            this.playing = false;
            document.getElementById('player-play').style.display = 'block';
            document.getElementById('player-pause').style.display = 'none';
        }
    }, {
        key: 'fastforward',
        value: function fastforward() {}
    }, {
        key: 'previous',
        value: function previous() {
            var index = this.playlist.indexOf(this.currentSong) - 1;
            if (index < 0) {
                index = this.playlist.length - 1;
            }
            this.loadNewMedia(this.playlist[index]);
        }
    }, {
        key: 'loadPlayist',
        value: function loadPlayist() {
            this.loadNewMedia(this.playlist[0]);
        }
    }, {
        key: 'forward',
        value: function forward() {
            var index = this.playlist.indexOf(this.currentSong) + 1;
            if (index > this.playlist.length - 1) {
                index = 0;
            }
            this.loadNewMedia(this.playlist[index]);
        }
    }, {
        key: 'volumeChange',
        value: function volumeChange(test) {
            this.player.volume = test.value;
        }
    }, {
        key: 'loadNewMedia',
        value: function loadNewMedia(src) {
            this.stop();
            this.previousSong = this.currentSong;
            this.currentSong = src;
            this.player.currentTime = 0;
            this.player.src = src;
            this.player.load();
            this.play();
            this.player.ontimeupdate = function () {
                var currentTime = this.player.currentTime;
                var minutes = Math.floor(currentTime / 60);
                var seconds = currentTime - minutes * 60;
                console.log(String(parseInt(seconds)).length);
                if (String(parseInt(seconds)).length == 1) {
                    seconds = "0" + String(parseInt(seconds));
                } else {
                    seconds = parseInt(seconds);
                }
                document.getElementById('player-currentTime').innerHTML = minutes + ':' + seconds;
                this.progress.value = parseInt(currentTime);
            }.bind(this);
            this.player.addEventListener('loadedmetadata', function () {
                var total = this.player.duration;
                var minutes = Math.floor(total / 60);
                var seconds = total - minutes * 60;
                if (String(parseInt(seconds)).length == 1) {
                    seconds = "0" + String(parseInt(seconds));
                } else {
                    seconds = parseInt(seconds);
                }
                document.getElementById('player-totalTime').innerHTML = minutes + ':' + seconds;
                this.progress.setAttribute('max', parseInt(total));
            }.bind(this));
            this.progress.value = 0;
        }
    }, {
        key: 'timeUpdate',
        value: function timeUpdate() {
            this.progress.value = String(this.player.currentTime);
        }
    }, {
        key: 'initHandlers',
        value: function initHandlers() {
            this.player.addEventListener('ended', function () {
                this.forward();
            }.bind(this));
        }
    }]);

    return Player;
}();

//# sourceMappingURL=Player-compiled.js.map