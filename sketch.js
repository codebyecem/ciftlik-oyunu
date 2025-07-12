
let oyunDurumu = "secim";
let secilenKarakter = null;
let karakterX = 300;
let karakterY = 250;
let zehraX = 800;
let zehraY = 800;
let gecikmeliPozisyonlar = [];

let bahceyeGidiliyor = false;
let hedefKapix = 580;
let hedefKapiy = 150;
let bahceyeGidisZamani;
let kapidaBekliyor = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  if (oyunDurumu === "secim") {
    karakterSecimEkrani();
  } else if (oyunDurumu === "oyun" || oyunDurumu === "bahce") {

    // Karakter hareketi
    if (!bahceyeGidiliyor && !kapidaBekliyor) {
      if (keyIsDown(LEFT_ARROW)) karakterX -= 2;
      if (keyIsDown(RIGHT_ARROW)) karakterX += 2;
      if (keyIsDown(UP_ARROW)) karakterY -= 2;
      if (keyIsDown(DOWN_ARROW)) karakterY += 2;
    }

    if (oyunDurumu === "oyun") {
      karakterEvi();

      // Kapıya yürüyüş animasyonu
      if (bahceyeGidiliyor) {
        if (karakterX < hedefKapix) karakterX += 2;
        if (karakterX > hedefKapix) karakterX -= 2;
        if (karakterY < hedefKapiy) karakterY += 2;
        if (karakterY > hedefKapiy) karakterY -= 2;

        if (abs(karakterX - hedefKapix) < 3 && abs(karakterY - hedefKapiy) < 3) {
          bahceyeGidiliyor = false;
          kapidaBekliyor = true;
          bahceyeGidisZamani = millis();
        }
      }

      if (kapidaBekliyor && millis() - bahceyeGidisZamani > 1000) {
        oyunDurumu = "bahce";
        kapidaBekliyor = false;
      }
    }

    if (oyunDurumu === "bahce") {
      bahceEkrani();

      // Tarlalara ekilen bitkileri çiz
for (let i = 0; i < tarlalar.length; i++) {
  let t = tarlalar[i];
  if (t.bitki !== "bos" && !t.buyuduMu) {
    cizTohum(t.x + 50, t.y + 30);
    if (millis() - t.sulamaBaslangic >= 20000) { 
      t.buyuduMu = true;
    }
  }

  // Eğer büyüdüyse normal bitkiyi çiz
  if (t.buyuduMu) {
    for (let j = 0; j < 3; j++) {
      let bitkiX = t.x + 20 + j * 20;
      let bitkiY = t.y + 20;
      if (t.bitki === "bugday") cizBugday(bitkiX, bitkiY);
      if (t.bitki === "havuç") cizHavuc(bitkiX, bitkiY);
      if (t.bitki === "cilek") cizCilek(bitkiX, bitkiY);
    }
  }





      }

      // Eğer ekim menüsü açıksa çiz
      if (ekimMenusuAcik) {
        cizEkimMenusu();
      }
    }
  }
}

function mousePressed() {
  // Kapıya tıklama
  if (oyunDurumu === "oyun" && !bahceyeGidiliyor && !kapidaBekliyor) {
    if (mouseX > 560 && mouseX < 600 && mouseY > 100 && mouseY < 200) {
      bahceyeGidiliyor = true;
      return;
    }
  }

  // Bahçede tarlaya tıklama
  if (oyunDurumu === "bahce" && !ekimMenusuAcik) {
    for (let i = 0; i < tarlalar.length; i++) {
      let t = tarlalar[i];
      if (mouseX > t.x && mouseX < t.x + 100 && mouseY > t.y && mouseY < t.y + 40) {
        seciliTarla = i;
        ekimMenusuAcik = true;
        return;
      }
    }
  }

  // Ekim menüsü seçimi
  if (ekimMenusuAcik) {
    if (mouseX > 50 && mouseX < 150 && mouseY > 100 && mouseY < 130) {
      tarlalar[seciliTarla].bitki = "bugday";
      ekimMenusuAcik = false;
      return;
    } else if (mouseX > 50 && mouseX < 150 && mouseY > 140 && mouseY < 170) {
      tarlalar[seciliTarla].bitki = "havuç";
      ekimMenusuAcik = false;
      return;
    } else if (mouseX > 50 && mouseX < 150 && mouseY > 180 && mouseY < 210) {
      tarlalar[seciliTarla].bitki = "cilek";
      ekimMenusuAcik = false;
      return;
    }
  }
}

function karakterSecimEkrani() {
  textAlign(CENTER);
  textSize(32);
  fill(50);
  text("Karakterini Seç", width / 2, 50);

  karakterKutusu(100, 100, "Aleyna", 1);
  karakterKutusu(250, 100, "Kubra", 2);
  karakterKutusu(400, 100, "Zeynep", 3);
  karakterKutusu(100, 250, "Guzin", 4);
  karakterKutusu(250, 250, "Akin", 5);
  karakterKutusu(400, 250, "Baris", 6);
}

function karakterKutusu(x, y, isim, karakterID) {
  fill('#b3d9ff');
  rect(x, y, 100, 100, 10);

  fill(0);
  textSize(14);
  text(isim, x + 50, y + 120);

  if (isim === "Aleyna") cizPortreAleyna(x + 50, y + 50);
  if (isim === "Kubra") cizPortreKubra(x + 50, y + 50);
  if (isim === "Zeynep") cizPortreZeynep(x + 50, y + 50);
  if (isim === "Guzin") cizPortreGuzin(x + 50, y + 50);
  if (isim === "Akin") cizPortreAkin(x + 50, y + 50);
  if (isim === "Baris") cizPortreBaris(x + 50, y + 50);

  if (
    mouseIsPressed &&
    mouseX > x && mouseX < x + 100 &&
    mouseY > y && mouseY < y + 100
  ) {
    secilenKarakter = karakterID;
    oyunDurumu = "oyun";
    karakterX = 300;
    karakterY = 250;
    zehraX = 800;
    zehraY = 800;
    gecikmeliPozisyonlar = [];
  }
}

function karakterEvi() {
  if (secilenKarakter === 1) {
    aleynaEvi();
    cizPortreAleyna(karakterX, karakterY);
  } else if (secilenKarakter === 2) {
    kubraEvi();
    cizPortreKubra(karakterX, karakterY);
  } else if (secilenKarakter === 3) {
    zeynepEvi();
    cizPortreZeynep(karakterX, karakterY);
  } else if (secilenKarakter === 4) {
    guzinevi();
    cizPortreGuzin(karakterX, karakterY);
  } else if (secilenKarakter === 5) {
    akinEvi();
    cizPortreAkin(karakterX, karakterY);
  } else if (secilenKarakter === 6) {
    barisEvi();
    cizPortreBaris(karakterX, karakterY);
  }
}















