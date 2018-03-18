let active = false;
const draw = function(evt) {
	if (active == false) return;
	const x = evt.clientX;
	const y = evt.clientY;
	const div = document.createElement("div");
	div.style.top = y + "px";
	div.style.left = x + "px";
	document.body.appendChild(div);
}

const drawActive = function() {
		active = !active
}

document.body.addEventListener("mousemove", draw);
document.body.addEventListener("mousedown", drawActive);
document.body.addEventListener("mouseup", drawActive);
