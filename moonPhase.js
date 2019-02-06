let img;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	img = loadImage('assets/moonphoto.png');
}

function draw() {
	background(0);

	noFill();
	stroke(255);
	texture(img);
	sphere(windowWidth/10);
}