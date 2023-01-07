img="";
status="";
function preload() {
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelloaded() {
    console.log("Modelloaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text( results[0].label,results[0].x+15 ,results[0].y+15);
    text(results[1].label,results[1].x+15 ,results[1].y+15);
noFill();
    stroke("#FF0000");
    rect(results[0].x,results[0].y, results[0].width, results[0].height);
    rect(results[1].x, results[1].y, results[1].width, results[1].height);

}
