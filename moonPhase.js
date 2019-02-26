var x = 1;
var framesElapsed = 0;
var secondX = 500;
var phase = 0;
var shade = 255;
 
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	window.onresize = function(){createCanvas(windowWidth, windowHeight)};
	background(0);
	framesElapsed++;
	if (framesElapsed % 10 == 0){
		x = x + 1; 	
	}
	if (x > 30){
		x = 1;
	}	
	if (framesElapsed % 10 == 0){
		shade = shade - 10;
	}
	if (shade <= 0){
		shade = 255;
	}
	

	moon (x, 200, shade);
	console.log(shade);
}


function moon (x, size, shade){
	var size = random(100, 300);

	fill(shade, shade, 100);
	ellipse(windowWidth/2, windowHeight/2, size, size);

	if (x <= 15){
	phase = map(x, 1, 15, windowWidth*.50, windowWidth*.25);
}
if (x >= 16){
	phase = map(x, 16, 30, windowWidth*0.75, windowWidth*0.50);
}
	fill(0);
	ellipse(phase, windowHeight/2, size, size);
