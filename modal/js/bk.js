///////////////////////////////////////////////////////////////////////////////
//Click play video from another button (not using youtube play button)
////////////////////////////////////////////////////////////////////////////////

// const tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// const firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// let player;

// function playVideoId() {
//     if (player) {
//         player.destroy();
//     }
//     player = new YT.Player('c_video01', {
//         videoId: 'gqZlUEEmehE',
//         playerVars: {
//             playsinline: 1,
//             loop: 1,
//             // autoplay: 1,
//             controls: 1,
//             showinfo : 0,
//             rel: 0,
//             // mute: 1,
//             modestbranding: 1,
//         },
//         events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//         },
//     });
// }
// window.onYouTubeIframeAPIReady = function () {
//     playVideoId();
// };

// function onPlayerReady(event) {
//     event.target.playVideo();
// }

// var done = false;

// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//         setTimeout(stopVideo, 6000);
//         done = true;
//     }
// }

// function stopVideo() {
//     player.stopVideo();
// }
// $('#btn_play01').click(function(event){
//     $(this).hide();
//     $('.c_video_wrap .mask').hide();
//     $('.c_video_wrap .bg').hide();
//     playVideoId();
// });



///////////////////////////////////////////////////////////////////////////
//method 2: 
///////////////////////////////////////////////////////////////////////////

 // Load the IFrame Player API code asynchronously.

//  var tag = document.createElement('script');

//  tag.src = "https://www.youtube.com/iframe_api";
//  var firstScriptTag = document.getElementsByTagName('script')[0];
//  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//  var player;
//  function onYouTubeIframeAPIReady() {
//    player = new YT.Player('c_video', {
//     //  height: '390',
//     //  width: '640',
//      videoId: 'mwk4qIb8n2w',
//      controls: 1, // Show pause/play buttons in player
//      showinfo: 1, // Hide the video title
//      modestbranding: 1, // Hide the Youtube Logo
//      fs: 1, // Hide the full screen button
//      cc_load_policy: 0, // Hide closed captions
//      iv_load_policy: 3, // Hide the Video Annotations
//      autohide: 1, // Hide video controls when playing
//      //loop: 1,
//      rel: 0,
//      //autoplay: 0, // Auto-play the video on load
//      // mute: 1,
//      modestbranding: 1,
//     //  playerVars: {
//     //    'playsinline': 1
//     //  },
//      events: {
//        'onReady': onPlayerReady,
//        'onStateChange': onPlayerStateChange
//      }
//    });
//  }

//  function onPlayerReady(event) {
//    event.target.playVideo();
//  } 
//  var done = false;
//  function onPlayerStateChange(event) {
//    if (event.data == YT.PlayerState.PLAYING && !done) {
//      setTimeout(stopVideo, 6000);
//      done = true;
//    }
//  }
//  function stopVideo() {
//    player.stopVideo();
//  }



// YouTube API stuff
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// Init empty array of iframe IDs, one from each video
var iframeIds = [];
// For each iframe you find, add its ID to the iframeIds array
var iframes = document.querySelectorAll(".c_video_iframe");
//console.log(iframes)
iframes.forEach(function(iframe) {
	//console.log( iframe.dataset.src)
	// var video_id = iframe.dataset.src.split('v=')[1];
	// var ampersandPosition = video_id.indexOf('&');
	// if(ampersandPosition != -1) {
	// 	video_id = video_id.substring(0, ampersandPosition);
	// }
	// iframeIds.push(iframe.id, iframe.video_id);
	iframeIds.push(iframe.id);
	//console.log(video_id)
});

// Once the YouTube API is ready, for each iframeId in your array, create
// a new YT player and give it the onReady event
function onYouTubeIframeAPIReady() {
	iframeIds.forEach(function(iframeId) {
		var player = new YT.Player(iframeId, {
			// videoId: videoId,
			playerVars: {
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
			}
		});
	});
}


function onPlayerReady(event) {
    event.target.playVideo();
}
 var done = false;
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
     setTimeout(stopVideo, 6000);
     done = true;
   }
 }
 function stopVideo() {
   player.stopVideo();
 }


// Init empty array of iframe YT objects for use elsewhere
// Here I only use this to iterate through and pause all videos when
// another begins playing
var iframeObjects = [];

// Shared onReady event which adds events to each video's corresponding
// play and stop buttons
function onPlayerReady(event) {
	var iframeObject = event.target;
  console.log(iframeObject)
	var iframeElement = iframeObject.h;
  //console.log(iframeElement)
	var videoContainer = iframeElement.parentElement;
	//console.log(videoContainer)
	var play = videoContainer.querySelector(".btn_play");
	//var stop = videoContainer.querySelector(".stop");
	
	// Push current iframe object to array
	iframeObjects.push(iframeObject);

	play.addEventListener("click", function() {
    	//console.log('play')
		$(this).hide();
		$(this).parent().find('.mask').hide();
		$(this).parent().find('.bg').hide();
		// iframeObjects.forEach(function(scopediframeObject) {
		// 	scopediframeObject.pauseVideo();
		// 	var scopediframeElement = scopediframeObject.h;
		// 	//scopediframeElement.classList.remove('isPlaying');
		// 	console.log('111')
		// });
		console.log(iframeObject)
		// Play selected video
		iframeObject.playVideo();
		//iframeElement.classList.add('isPlaying');
		// iframeObject.get(0).contentWindow.postMessage(
				
		// 	JSON.stringify({
		// 	event: "command",
		// 	func: "playVideo",
		// 	}),"https://www.youtube.com"
		// );
	});
	
	// stop.addEventListener("click", function() {
	// 	iframeObject.pauseVideo();
	// 	iframeElement.classList.remove('isPlaying');
	// });
}






