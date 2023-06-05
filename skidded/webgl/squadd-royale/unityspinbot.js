var link = window.location.href;
SendMessage = gameInstance.SendMessage;

//gapi hook
var gapi = {}; 
gapi.load = function() {console.log("Gapi disabled!")};
/*
gapi.load('auth2', 
	function()
	{
		gapi.auth2.init({
			client_id: "953626420046-1qckbhohr28mi0vn4tp94dujskq6k131.apps.googleusercontent.com",
			scope: "profile email" // this isn't required
			//ux_mode: "redirect"
		}).then(function(auth2) {
			console.log( "signed in: " + auth2.isSignedIn.get() );  
		}, function(error) {
			console.log(error);
		});
	}
);
*/

function OnApplicationQuit()
{
   SendMessage('CanvasHome', 'OnWebGLApplicationQuit', '');
   return true;
}

window.onbeforeunload = OnApplicationQuit;

window.addEventListener('message', function(event) {
	if(document.referrer.indexOf(".gamedistribution.com/") !== -1)
	{
		origin = document.referrer;
	}
	// Now we check if the origin domain is correct.
	if (!origin.startsWith(event.origin)) return;

	// Did we get data?
	if (!event.data) return;

	// What kind of data?
	if (event.data === 'resume') {
		resumeGame();
	} else if (event.data === 'pause') {
		pauseGame();
	} else if (event.data.referrer) {
		// Partner can use this referrer domain for affiliate purposes.
		console.log('[Partner] Publisher domain: ' +
			event.data.referrer);
	}
}, false);

function resumeGame() {
	console.log('[Partner] Partner resumed the game!');
	// Invoke the game resume method here.
	SendMessage('CanvasBlock', 'ResumeGame', '');
}

function pauseGame() {
	console.log('[Partner] Partner paused the game!');
	// Invoke the game pause method here.
}

function refreshSlot(id) {
	console.log("ADS disabled");
	return;
	aipDisplayTag.refresh(id);
}

var games = 0;
function requestAdvertisement() {
	
	console.log("Ads disabled!");
	SendMessage('CanvasBlock', 'AdCompleted');
	return;
	if(document.referrer.indexOf(".gamedistribution.com") == -1)
	{
		if(games == 0)
		{
			adplayer.startPreRoll();		
			games = 1;
		}
		else
		{
			SendMessage('CanvasBlock', 'AdCompleted');
			games--;
		}		
	}
	else
	{
		console.log('[Partner] Partner requests advertisement.');
		if(document.referrer.indexOf(".gamedistribution.com/") !== -1)
		{
			origin = document.referrer;
		}
		parent.postMessage('requestAdvertisement', origin);
	}		
}