let img;
function preload() {
	img = loadImage('assets/moonphoto.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	background(0);

	noFill();
	stroke(255);
	texture(img);
	sphere(windowWidth/10);
}