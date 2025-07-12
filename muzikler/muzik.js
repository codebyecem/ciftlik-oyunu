let muzik;
let muzikCaldiMi = false;

function preload() {
  muzik = loadSound('muzikler/just-relax-11157.mp3');

}

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(0);
}

function draw() {
  background(255, 220, 220);
  if (!muzikCaldiMi) {
    text("Müziği başlatmak için ekrana TIKLA 🎶", width / 2, height / 2);
  }
}

function mousePressed() {
  if (!muzik.isPlaying()) {
    muzik.loop();
    muzikCaldiMi = true;
  }
}


