function kubraEvi() {
  ev(); 

  // Karakter
  cizPortreKubra(karakterX, karakterY);

  // Manken 
  cizManken(500, 270);

  // Zehra 
  gecikmeliPozisyonlar.push({ x: karakterX, y: karakterY, zaman: millis() });

  for (let i = 0; i < gecikmeliPozisyonlar.length; i++) {
    let pozisyon = gecikmeliPozisyonlar[i];
    if (millis() - pozisyon.zaman >= 1000) {
      zehraX = pozisyon.x + 30;
      zehraY = pozisyon.y;
      gecikmeliPozisyonlar.splice(i, 1);
      break;
    }
  }

  cizZehra(zehraX, zehraY);

  // Kübra’nın kedileri
  cizSimba(120, 320);
  cizKedi(260, 220);
  cizLuna(400, 320);

  // Etiketler
  fill(0);
  textAlign(CENTER);
  textSize(12);
  text("Simba", 120, 300);
  text("Kedi", 260, 200);
  text("Luna", 400, 300);
  text("Zehra", zehraX, zehraY - 40);
  
  function cizManken(x, y) {
  // Gövde (krem rengi)
  fill('#f5f5dc');
  stroke(50);
  strokeWeight(2);
  ellipse(x, y, 20, 40); // üst gövde
  rect(x - 8, y + 10, 16, 25, 8); // alt gövde

  // Metalik ayak
  fill(150);
  rect(x - 2, y + 35, 4, 30); // ince çubuk

  // Ayak tabanı
  fill(100);
  rect(x - 15, y + 60, 30, 5); // taban
}

}


