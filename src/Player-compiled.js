"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player() {
        _classCallCheck(this, Player);

        this.player = null;
        this.src = null;
        this.type = 1;
    }

    _createClass(Player, [{
        key: "init",
        value: function init(element) {
            this.player = element;
            this.player.controls = true;
            this.play();
        }
    }, {
        key: "mediaType",
        value: function mediaType() {
            if (this.player.tagName == "AUDIO") {
                this.type = 1;
            } else {
                this.type = 2;
            }
        }
    }, {
        key: "play",
        value: function play() {
            this.player.play();
        }
    }, {
        key: "stop",
        value: function stop() {
            this.player.pause();
        }
    }, {
        key: "fastforward",
        value: function fastforward() {}
    }, {
        key: "volumeUp",
        value: function volumeUp() {}
    }, {
        key: "initHandlers",
        value: function initHandlers() {}
    }]);

    return Player;
}();

//# sourceMappingURL=Player-compiled.js.map