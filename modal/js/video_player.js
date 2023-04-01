/////////////////////////////////////////////////////////////////////////////
//Click play video from another button (not using youtube play button)
//////////////////////////////////////////////////////////////////////////////

const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;


function onYouTubeIframeAPIReady(frameId, videoId) {
    // if (player) {
    //     player.destroy();
    // }
    player = new YT.Player(frameId, {
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

// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//         setTimeout(stopVideo, 6000);
//         done = true;
//     }
// }

function stopVideo() {
    player.stopVideo();
}

$('.btn_play').click(function(event){
	const videoId = $(this).data('id');
	const frameId = $(this).parent().find('.c_video_iframe').attr('id');
	console.log(frameId,videoId)
	$(this).hide();
	$(this).parent().find('.mask').hide();
	$(this).parent().find('.bg').hide();
	onYouTubeIframeAPIReady(frameId, videoId);
});