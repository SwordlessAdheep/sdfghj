
img= "";
status= "";

function setup() {

canvas=createCanvas(650, 400);
canvas.center();
objectDetector= ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status: detecting ghosts in your room :)";

}

function preload() {

img= loadImage("dog_cat.jpg");

}

function draw() {

image(img, 0, 0 , 650, 400 );
fill("#FF0000");
text("dog", 150, 80);
noFill();
stroke("#FF0000");
rect(125, 75 , 200, 400);
fill("#FF0000");
text("big chungus cat", 400, 80);
noFill();
stroke("#FF0000");
rect(300, 80, 200, 400);

}

function modelLoaded() {

console.log("model is not loaded noob ehheheheheheh");
status= true;
objectDetector.detect(img,gotResult);

}

function gotResult(error, results) {

if (error){

console.log(error);

}

console.log(results);

}