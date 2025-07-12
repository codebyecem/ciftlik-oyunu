let tarlaDurumlari = ["bos", "bos", "bos"];  

function bahceEkrani() {
  background(135, 206, 235); // Gökyüzü

  // Yer yüzü 
  fill(150, 200, 150);
  noStroke();
  rect(0, height / 2, width, height / 2);

  // Gök çizgisi
  stroke(0);
  strokeWeight(2);
  line(0, height / 2, width, height / 2);

  // Güneş
  fill(255, 225, 0);
  stroke(0);
  strokeWeight(1);
  ellipse(500, 70, 60, 60);

  // Bulutlar
  fill(255);
  stroke(0);
  strokeWeight(1);
  ellipse(100, 60, 40, 40);
  ellipse(120, 60, 40, 40);
  ellipse(110, 40, 40, 40);
  ellipse(200, 80, 50, 50);
  ellipse(230, 80, 50, 50);
  ellipse(215, 60, 50, 50);

  // Tarlalar
  fill(120, 80, 40);
  stroke(0);
  strokeWeight(1);
  for (let i = 0; i < 3; i++) {
    rect(100 + i * 120, 250, 100, 40, 8);
  }

  
  cizCit();

  
  cizElmaAgaci(150, 150);
  cizElmaAgaci(270, 150);
  cizElmaAgaci(400, 150);

  // Eve dön butonu
  fill(200);
  rect(20, 20, 100, 30, 5);

  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  text("Eve Dön", 70, 35);

  // Karakter
  switch(secilenKarakter) {
    case 1:
      cizPortreAleyna(karakterX, karakterY);
      break;
    case 2:
      cizPortreKubra(karakterX, karakterY);
      break;
    case 3:
      cizPortreZeynep(karakterX, karakterY);
      break;
    case 4:
      cizPortreGuzin(karakterX, karakterY);
      break;
    case 5:
      cizPortreAkin(karakterX, karakterY);
      break;
    case 6:
      cizPortreBaris(karakterX, karakterY);
      break;
  }
}



