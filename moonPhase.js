let img;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	img = loadImage('assets/fullmoon.jpg');
	background(0);
}

function draw() {
	

	//noFill();
	//stroke(255);
	texture(img);
	sphere(windowWidth/10);
}