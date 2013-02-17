var AudioPlayer = new audioPlayer(4);
var baseURL = "http://media.leanometry.com/";

function bounce() {
    $('.bouncerSpeaker').removeClass('swing');
    $('.bouncerSpeaker').removeClass('flip');
    $('.bouncerSpeaker').toggleClass('bounce');
    
};

function audioPlayer(songsCount) {
    this.play = function (index) {
        $('#audioSource' + index)[0].play();
    }

    var addSource = function (elem, path) {
        $('<source />').attr('src', path).appendTo(elem);
    }

    var createOne = function (index) {
        var audio = $('<audio id="audioSource' + index + '"></audio>', {
            preload: 'auto',
            controls: 'controls'
        });
        addSource(audio, baseURL + 'audio/sound' + index + '.mp3');
        addSource(audio, baseURL + 'audio/sound' + index + '.ogg');
        audio.appendTo($('.bouncerSpeaker'));
    }

    var generate = function (count) {
        for (i = 1; i <= count; i++) {
            createOne(i);
        }
    }
    generate(songsCount);
}

$(document).ready(function () {
    var intervalID = window.setInterval(bounce, 3000);

    $('.bouncerSpeaker').hover(

    function () {
        $(this).removeClass('bounce');
        $(this).removeClass('flip');
        $(this).addClass('swing')
    },

    function () {
        $(this).removeClass('swing');
    });

    $('.bouncerSpeaker a').click(

    function (e) {
        e.preventDefault();
        $('.bouncerSpeaker').addClass('flip');
        AudioPlayer.play(Math.ceil(Math.random() * 4));
    });
}); 
