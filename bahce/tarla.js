let tarlalar = [
  { x: 100, y: 250, bitki: "bos", sulamaBaslangic: 0, buyuduMu: false },
  { x: 220, y: 250, bitki: "bos", sulamaBaslangic: 0, buyuduMu: false },
  { x: 340, y: 250, bitki: "bos", sulamaBaslangic: 0, buyuduMu: false },
];


let seciliTarla = -1;
let ekimMenusuAcik = false;

function mousePressed() {
  if (!ekimMenusuAcik) {
    for (let i = 0; i < tarlalar.length; i++) {
      let t = tarlalar[i];
      if (mouseX > t.x && mouseX < t.x + 100 && mouseY > t.y && mouseY < t.y + 40) {
        seciliTarla = i;
        ekimMenusuAcik = true;
        break;
      }
    }
  } else {
    // Menü açıkken bitki seçimi
    if (mouseX > 50 && mouseX < 150 && mouseY > 100 && mouseY < 130) {
  tarlalar[seciliTarla].bitki = "bugday";
  tarlalar[seciliTarla].sulamaBaslangic = millis();
  tarlalar[seciliTarla].buyuduMu = false;
  ekimMenusuAcik = false;
}

  }
}

function cizEkimMenusu() {
  fill(200);
  rect(50, 100, 100, 30);
  rect(50, 140, 100, 30);
  rect(50, 180, 100, 30);

  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  text("Buğday ek", 100, 115);
  text("Havuç ek", 100, 155);
  text("Çilek ek", 100, 195);
}

