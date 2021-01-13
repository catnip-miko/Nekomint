let slap = 0;
let start,startbutton;
let startcheck = true;
let c1s,c1,c2s,c2,c3s,c3,c4s,c4;

var slaps;
let toggle = false;
let randoms;
let slap1,slap2,slap3,slap4;
let drum1, drum2, drum3, drum4;
let cat;
let tri;

function preload() {
slap1 = loadSound('slap1.wav');
slap2 = loadSound('slap2.mp3');
slap3 = loadSound('slap3.wav');
slap4 = loadSound('slap4.mp3');

drum1= loadSound('drum1.wav');
drum2= loadSound('drum2.wav');
drum3= loadSound('drum3.mp3');
drum4= loadSound('drum4.wav');

tri=loadSound("tri.wav");
cat=loadSound("cat.mp3");

start = loadImage('start1.png');
startbutton=loadImage('button.png');
c1s= createVideo('c1sv.mp4');
c1= createVideo('c1v.mp4');
c2s= createVideo('c2sv.mp4');
c2= createVideo('c2v.mp4');
c3s= createVideo('c3sv.mp4');
c3= createVideo('c3v.mp4');
c4s= createVideo('c4sv.mp4');
c4= createVideo('c3v.mp4');
}

function touchStarted() {

if (getAudioContext().state !== 'running') {
  getAudioContext().resume();
}
}

function setup() {

createCanvas(1920, 1080);
imageMode(CENTER);
image(start,windowWidth / 2, windowHeight / 2);
button = createImg('button.png');
button.position(0, 0);
button.mousePressed(changeBG);
c1s.hide();
c1.hide();
c2s.hide();
c2.hide();
c3s.hide();
c3.hide();
c4s.hide();
c4.hide();
slaps = [slap1, slap2, slap3, slap4];
}

function changeBG() {
button.hide();
background(255);

image(c1s, windowWidth / 2, windowHeight / 2);
c1s.loop();
startcheck = false;
}

function draw() {
randoms = Math.floor(Math.random() * slaps.length);
if (startcheck == false) {
  if(slap>=0&&slap<20){
    image(c1s, windowWidth / 2, windowHeight / 2);
    c1s.loop();
  }
  if(slap>=20&&slap<40){
    image(c2s, windowWidth / 2, windowHeight / 2);
    c2s.loop();
  }
  if(slap>=40&&slap<60){
    image(c3s, windowWidth / 2, windowHeight / 2);
    c3s.loop();
    
  }
  if(slap>=60){
    image(c4s, windowWidth / 2, windowHeight / 2);
    c4s.loop();
    }

  fill(255);
  stroke(0);
  strokeWeight(5);
  textSize(50);
  text(slap, windowWidth * 3 / 4-10, windowHeight / 4);
  
  if (keyIsDown(32)) {
    if(slap>=0&&slap<20){
      image(c1, windowWidth / 2, windowHeight / 2);
      c1.loop();
    }
    if(slap>=20&&slap<40){
      image(c2, windowWidth / 2, windowHeight / 2);
      c2.loop();
    }
    if(slap>=40&&slap<60){
      image(c3, windowWidth / 2, windowHeight / 2);
      c3.loop();
    }
    if(slap>=60){
      image(c4, windowWidth / 2, windowHeight / 2);
      c4.loop();
    }
  
  }
}
}

function keyPressed() {

if (key == " ") {
  noStroke();
  fill(255);
  rect(0,0,windowWidth,windowHeight);
  toggle = true;
  slaps[randoms].play();
  if(slap==20){
    tri.play();
  }
  if(slap>=40&&slap<60){
    drum4.play();
    tri.stop();
  }
  if(slap>=60){
    cat.play();
   
  }
  slap++;
  
}
}

