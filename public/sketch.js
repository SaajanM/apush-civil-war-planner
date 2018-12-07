let userName;
let w;
let h;
let phrase;
function preload() {
    userName = window.prompt("Full Name");
    w = displayWidth;
    h = displayHeight;
    phrase = "Full Screen\nand New Question";
}
function windowResized() {
    w = displayWidth;
    h = displayHeight;
    resizeCanvas(w / 1.01, h / 1.05);
}
function setup() {
    createCanvas(w / 1.01, h / 1.05);
    background(200);
    rectMode(CENTER);
}
function touchEnded() {
    fullscreen();
    phrase = "New Question";
    loadJSON("/public/getq", propmtQuestion);
}
function draw() {
    background(200);
    translate(width / 2, height / 2);
    strokeWeight((width + height) / (2 * 10));
    stroke(0);
    rect(0, 0, width, height);
    textSize((width + height) / (2 * 15));
    strokeWeight(0);
    textAlign(CENTER);
    text("Click For \n"+phrase, 0, 0);
}
function promptQuestion(json) {
    let qArray = json.data;
    let question = qArray[0];
    let answer = qArray[1];
    let userAns = window.prompt(question);
    if (userAns.toLowerCase() == answer.toLowerCase()) {
        //Correct
    } else {
        //Incorrect
    }
}