
const tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;


function onYouTubeIframeAPIReady(videoId) {
    if (player) {
        player.stopVideo();
        player.destroy();
        player = null;  // Clear out the reference to the destroyed player
    }
    player = new YT.Player('c_modal_video', {
        videoId: videoId,
        playerVars: {
			enablejsapi : 1,
            playsinline: 1,
            loop: 1,
            // autoplay: 1,
            controls: 1,
            showinfo : 0,
            rel: 0,
            // mute: 1,
            modestbranding: 1,
        },
        events: {
            'onReady': onPlayerReady,
           // 'onStateChange': onPlayerStateChange
        },
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}
var done = false;

function stopVideo() {
    player.stopVideo();
}


$('.c_modal_overlay').on('click', function (event) {
    const target = $(event.target);
    if (!target.is('.c_modal_wrap, .c_modal_wrap *')) {
        stopVideo();
        $('.c_modal').removeClass('show');
    }
});
$('.btn_open_modal').on('click', function (event) {
    event.preventDefault();
    if (!$('.c_modal').hasClass('show')) {
        $('.c_modal').addClass('show')
        const videoId = $(this).data('id');
        console.log(videoId)
        onYouTubeIframeAPIReady(videoId);
    }
});
$('.c_modal_close').on('click', function (event) {
    event.preventDefault();
    stopVideo();
    $('.c_modal').removeClass('show');
});
    

