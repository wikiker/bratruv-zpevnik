const drone = new Scaledrone('hxgMNOIeg0uLThZ6');
var nazevMistnosti = "";

function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}


function zalozNovouMistnost() {
	nazevMistnosti = Math.random().toString().substr(2, 8);
	const mojeMistnost = drone.subscribe(nazevMistnosti);

	mojeMistnost.on('open', error => {
		if (error) {
			return console.error(error);
		}
		document.querySelector("#buttonZaloz").innerText = nazevMistnosti;
		document.querySelector("#buttonZaloz").onclick = "";
		$( "#buttonZaloz" ).click(function () { copyToClipboard(nazevMistnosti); });
	});
}

function zmenPisen(cisloPisne) {
	console.log("Nyní si zazpíváme písničku " + cisloPisne);
	drone.publish({
		room: nazevMistnosti,
		message: {pisen: cisloPisne}
	});
}