var canvas;
var img = new Image();
img.src='volume-of-surface-mine.jpg';


function wypisz() {
	
	canvas = document.getElementById('volCanvas');
	canvasContext = canvas.getContext('2d');
	
	drawEverything();

	canvasContext.drawImage(img,0,0);
	
	var wysSkarpy = Number(document.getElementById("wysSkarpy").value);
	var szerSkarpy = Number(document.getElementById("szerSkarpy").value);
	var ddkn = Number(document.getElementById("ddkn").value);
	var sdkn = Number(document.getElementById("sdkn").value);
			
	var objPomar;
	var objNieb;
	var ObjZiel;
	var ObjCzer;
	var objC;
			
	objPomar = ddkn * sdkn * wysSkarpy;
			
	objNieb = ((0.5 * wysSkarpy * szerSkarpy) * ddkn) * 2;
			
	objZiel = ((0.5 * wysSkarpy * szerSkarpy) * sdkn) * 2;
			
	objCzer = (szerSkarpy * szerSkarpy) * wysSkarpy * (1/3) * 4;
			
	objC = objPomar + objNieb + objZiel + objCzer;

	document.getElementById('objC').innerHTML = "Objetość wyrobiska jest równa : " + objC + " m<sup>3</sup>.";
	
	document.getElementById('objPomar').innerHTML = "Objetość pomarańczowej bryły : " + objPomar + " m<sup>3</sup>.";
	document.getElementById('objNieb').innerHTML = "Objetość niebieskich brył : " + objNieb + " m<sup>3</sup>.";
	document.getElementById('objZiel').innerHTML = "Objetość zielonych brył : " + objZiel + " m<sup>3</sup>.";
	document.getElementById('objCzer').innerHTML = "Objetość czerwonych brył : " + objCzer + " m<sup>3</sup>.";
}

function drawEverything() {
	// blanks out the screen with black
	colorRect(0, 0, canvas.width, canvas.height, 'white');
}

function colorRect(leftX, topY, width, height, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height);
}
