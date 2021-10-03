const drone = new Scaledrone('hxgMNOIeg0uLThZ6');

/*const room = drone.subscribe('room_name');

room.on('open', error => {
  if (error) {
	return console.error(error);
  }
  // Connected to room
});

room.on('message', message => {
  // Received a message sent to the room
});

const message = {
  hello: 'world',
  score: 10
};

drone.publish({
  room: 'room_name',
  message: message
});

drone.on('error', error => {
  console.error('Error with connection:', error);
});
drone.on('close', event => {
  console.log('Connection closed:', event);
});

const room = drone.subscribe('my-room');
room.on('message', message => console.log('Received data:', message.data));*/

//$("#app").load("https://bratruvzpevnik.cz/#/song/24 .application--wrap")

window.onload = function() {
	urlParams = new URLSearchParams(window.location.search);
	if(urlParams.has("mistnost")) {
		nazevMistnosti = urlParams.get("mistnost");
		const room = drone.subscribe(nazevMistnosti);

		room.on('open', error => {
			if (error) {
				return console.error(error);
			}
			// Connected to room
		});

		room.on("message", message => {
			console.log(message.data.pisen);
			novaPisen("https://bratruvzpevnik.cz/#/song/" + message.data.pisen);
		});
  	} else {
  		document.querySelector("#iframeZpevnik").style.display = "none";
  	}
}

function novaPisen(url) {
  document.getElementById('iframeZpevnik').src = url;
}